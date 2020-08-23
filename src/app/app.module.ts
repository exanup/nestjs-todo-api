import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './task/tasks.module';
import { Task } from './../entities/tasks.entity';

const ormConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'nestjs-todo.sqlite',
  entities: [Task],
  synchronize: true,
};
@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
