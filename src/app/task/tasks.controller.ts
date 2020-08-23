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
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksService.find();
  }

  @Get(':id')
  getTask(@Param('id') id) {
    return this.tasksService.findOne(id);
  }

  @Post()
  postTask(@Body() requestBody) {
    return this.tasksService.create(requestBody);
  }

  @Patch(':id')
  patchTask(@Param('id') id, @Body() requestBody) {
    return this.tasksService.update(id, requestBody);
  }

  @Put(':id')
  putTask(@Param('id') id, @Body() requestBody) {
    return this.tasksService.update(id, requestBody);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteTask(@Param('id') id) {
    return this.tasksService.remove(id);
  }
}
