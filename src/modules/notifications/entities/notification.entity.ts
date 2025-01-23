/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { uuid } from 'uuidv4';
import { CreateNotificationDto } from "../dto/create-notification.dto";
import { UpdateNotificationDto } from '../dto/update-notification.dto';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export class Notification {
    notificationId: string;
    sentTo: number;
    title: string;
    date: Date;
    seen: boolean;
    body: string;

    static fromDto(data: CreateNotificationDto | UpdateNotificationDto): Notification {
        const instance = new Notification();
        instance.notificationId = data.notificationId || uuid();
        if (data.sentTo) {
            instance.sentTo = data.sentTo;
        }
        if (data.title) {
            instance.title = data.title;
        }
        if (data.body) {
            instance.body = data.body;
        }
        if (data.date) {
            instance.date = data.date || new Date();
        }
        if (data.seen) {
            instance.seen = data.seen;
        }
        return instance;
    }

    static fromDynamoDb(data: any): Notification {

        const instance = new Notification();

        instance.notificationId = data.notification_id.S;
        instance.sentTo = data.sent_to.N;
        instance.title = data.title.S;
        instance.body = data.body.S;
        instance.date = new Date(Number(data.date.N));

        return instance;
    }

}
