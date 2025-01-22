import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Add files to a task (NO IMPLEMENTATION YET)',
    schema: {
      type: 'object',
      properties: {
        taskFiles: {
          type: 'string',
          format: 'binary',
          description: 'Tasks Files (opcional)',
        },
      },
    },
  })
  @Post('file/:id')
  addFile(@Param('id') id: string, @UploadedFile() taskFiles?: Express.Multer.File[]) {
    return `Pending to upload ${taskFiles?.length} files to AWS S3`;
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
