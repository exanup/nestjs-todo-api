import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { AppController } from 'src/app/app.controller';
import { AppService } from 'src/app/app.service';
import { TasksModule } from 'src/app/task/tasks.module';
import { Task } from 'src/entities/tasks.entity';

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
