import { UpdateTaskDto } from './../../dtos/tasks/updateTask.dto';
import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { Task } from 'src/entities/tasks.entity';
import { CreateTaskDto } from 'src/dtos/tasks/createTask.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  find() {
    return this.tasksRepository.find();
  }

  findOne(taskId: string) {
    return this.findOneOrThrow(taskId);
  }

  async create(task: CreateTaskDto) {
    const id = uuidv4();
    const isDone = false;

    const newTask = this.tasksRepository.create({ ...task, id, isDone });

    return this.tasksRepository.save(newTask);
  }

  async update(taskId: string, task: UpdateTaskDto) {
    const foundTask = await this.findOneOrThrow(taskId);

    const newTask = this.tasksRepository.merge(foundTask, task);

    return this.tasksRepository.save(newTask);
  }

  async remove(taskId: string) {
    const foundTask = await this.findOneOrThrow(taskId);

    return this.tasksRepository.remove(foundTask);
  }

  private async findOneOrThrow(taskId: string) {
    const foundTask = await this.tasksRepository.findOne(taskId);

    if (!foundTask) {
      throw new NotFoundException();
    }

    return foundTask;
  }
}
