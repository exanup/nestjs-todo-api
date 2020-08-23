import {
  Controller,
  Param,
  Body,
  HttpCode,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { TasksService } from 'src/app/task/tasks.service';
import { CreateTaskDto } from 'src/dtos/tasks/createTask.dto';
import { UpdateTaskDto } from 'src/dtos/tasks/updateTask.dto';
import { ReplaceTaskDto } from 'src/dtos/tasks/replaceTask.dto';
import { FindOneTaskParams } from 'src/dtos/tasks/findOneTaskParams';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksService.find();
  }

  @Get(':id')
  getTask(@Param() params: FindOneTaskParams) {
    return this.tasksService.findOne(params.id);
  }

  @Post()
  postTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Patch(':id')
  patchTask(
    @Param() params: FindOneTaskParams,
    @Body() patchTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(params.id, patchTaskDto);
  }

  @Put(':id')
  putTask(
    @Param() params: FindOneTaskParams,
    @Body() replaceTaskDto: ReplaceTaskDto,
  ) {
    return this.tasksService.update(params.id, replaceTaskDto);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteTask(@Param() params: FindOneTaskParams) {
    return this.tasksService.remove(params.id);
  }
}
