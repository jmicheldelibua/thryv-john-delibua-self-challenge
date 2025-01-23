import { IsString } from "class-validator";

export class CreateNotificationDto {
    @IsString()
    notificationId: string;
    sentTo: number;
    title: string;
    date: Date;
    body: string;
    seen: boolean
}
