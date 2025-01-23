import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';

@Injectable()
export class NotificationsService {
  private readonly tableName = 'notifications';
  private readonly client: DynamoDBClient;

  constructor() {
    this.client = new DynamoDBClient({ region: 'us-west-2' });
  }

  create(createNotificationDto: CreateNotificationDto) {
    return 'This action adds a new notification';
  }

  async findAll() {
    const notifications: Notification[] = [];
    const command = new ScanCommand({ TableName: this.tableName });
    const response = await this.client.send(command);

    // TODO: Map response.Items to notifications
    return response.Items;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
