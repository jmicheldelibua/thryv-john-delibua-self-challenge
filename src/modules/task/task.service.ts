import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

  constructor(@InjectRepository(Task)
  private tasksRepository: Repository<Task>,) { }

  create(createTaskDto: CreateTaskDto) {
    return this.tasksRepository.save(createTaskDto);
  }

  findAll() {
    return this.tasksRepository.find();
  }

  findOne(id: number) {
    return this.tasksRepository.findOneBy({ id });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.tasksRepository.save({ id, ...updateTaskDto });
  }

  remove(id: number) {
    return this.tasksRepository.delete(id);
  }
}
