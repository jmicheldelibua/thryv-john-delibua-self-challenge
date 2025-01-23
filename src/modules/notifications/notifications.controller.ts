import { Controller, Get, Param, Delete, Body, Post, Patch } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Public } from '@core/decorators';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) { }


  @ApiProperty({ description: 'Create a new notification' })
  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.create(createNotificationDto);
  }


  @ApiProperty({ description: 'Get all notifications' })
  @Get()
  findAll() {
    return this.notificationsService.findAll();
  }

  @ApiProperty({ description: 'Get a notification by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateNotificationDto) {
    return this.notificationsService.update(id, updateTaskDto);
  }

  @ApiProperty({ description: 'Delete a notification by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationsService.remove(id);
  }
}
