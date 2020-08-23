import { Injectable, NotFoundException } from '@nestjs/common';
import * as TaskRepo from '../../repo/tasks.repo';

@Injectable()
export class TasksService {
  find() {
    return TaskRepo.find();
  }

  findOne(taskId) {
    const foundTask = TaskRepo.findOne(taskId);

    if (!foundTask) {
      throw new NotFoundException();
    }

    return foundTask;
  }

  create(task) {
    return TaskRepo.create(task);
  }

  update(taskId, task) {
    const foundTask = TaskRepo.findOne(taskId);

    if (!foundTask) {
      throw new NotFoundException();
    }

    return TaskRepo.update(taskId, task);
  }

  remove(taskId) {
    const foundTask = TaskRepo.findOne(taskId);

    if (!foundTask) {
      throw new NotFoundException();
    }

    return TaskRepo.remove(taskId);
  }
}
