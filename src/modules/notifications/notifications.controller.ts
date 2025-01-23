import { Controller, Get, Param, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Public } from '@core/decorators';

@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) { }

  @Public()
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

  @ApiProperty({ description: 'Delete a notification by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationsService.remove(id);
  }
}
