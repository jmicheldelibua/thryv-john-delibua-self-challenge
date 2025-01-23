import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumberString, IsOptional, IsString } from "class-validator";

export class CreateNotificationDto {
    @ApiProperty({ example: '5f8f6b2b-7b8d-4b7d-8b3d-3b7d8b3d7b8d', description: 'Notification id' })
    @IsString()
    notificationId: string;

    @ApiProperty({ example: 1, description: 'UserId to be send the notification' })
    @IsNumberString()
    sentTo: number;

    @ApiProperty({ example: 'New Notification', description: 'Notification title' })
    @IsString()
    title: string;

    @ApiProperty({ example: 'This is a new notification', description: 'Notification body' })
    @IsString()
    body: string;

    @ApiProperty({ example: true, description: 'Notification seen status' })
    @IsBoolean()
    @IsOptional()
    seen: boolean

    date: Date;
}
