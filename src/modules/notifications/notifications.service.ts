import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { AttributeValue, DeleteItemCommand, DynamoDBClient, DynamoDBClientConfig, GetItemCommand, PutItemCommand, ScanCommand } from '@aws-sdk/client-dynamodb';
import { Notification } from './entities';
import { ConfigService } from '@nestjs/config';
import { DYNAMO_DB_CONFIG_TOKEN } from '@core/constant';


@Injectable()
export class NotificationsService {
  private readonly tableName = 'notifications';
  private readonly client: DynamoDBClient;

  constructor(private configService: ConfigService) {
    this.client = new DynamoDBClient(this.configService.get(DYNAMO_DB_CONFIG_TOKEN) as DynamoDBClientConfig);
  }

  create(createNotificationDto: CreateNotificationDto) {
    const noti = Notification.fromDto(createNotificationDto);
    return this.upserOnde(noti);
  }

  async findAll() {
    const notifications: Notification[] = [];
    const command = new ScanCommand({ TableName: this.tableName });
    const response = await this.client.send(command);

    if (response.Items) {
      response.Items.forEach((item) => {
        const notification = Notification.fromDynamoDb(item);
        notifications.push(notification);
      });
    }

    return notifications;
  }

  async findOne(id: string) {
    const command = new GetItemCommand({
      TableName: this.tableName,
      Key: {
        notification_id: { S: id.toString() },
      },
    });

    const result = await this.client.send(command);

    if (result.Item) {
      return Notification.fromDynamoDb(result.Item);
    }
    return undefined;
  }

  update(id: string, updateNotificationDto: UpdateNotificationDto) {
    const noti = Notification.fromDto({ ...updateNotificationDto, notificationId: id });
    return this.upserOnde(noti);
  }

  upserOnde(data: Notification) {
    const itemObject: Record<string, AttributeValue> = {
      notification_id: {
        S: data.notificationId
      },
      title: {
        S: data.title
      },
      body: {
        S: data.body
      },
      sent_to: {
        N: String(data.sentTo)
      },
      seen: {
        BOOL: data.seen
      },
      date: {
        N: String(data.date.getTime())
      }
    }

    const command = new PutItemCommand({
      TableName: this.tableName,
      Item: itemObject
    });

    this.client.send(command);

    return data;
  }

  async remove(id: string) {

    const command = new DeleteItemCommand({
      TableName: this.tableName,
      Key: {
        notification_id:
        {
          N: id
        }
      },
      ReturnConsumedCapacity: 'TOTAL',
      ReturnValues: 'ALL_OLD',

    });
    const result = await this.client.send(command);

    if (result.Attributes) {
      return true
    }
    return false

  }
}
