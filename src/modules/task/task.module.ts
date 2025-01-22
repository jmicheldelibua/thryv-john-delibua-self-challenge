import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task.service';
import { User } from '@modules/users';
import { Task } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule { }
