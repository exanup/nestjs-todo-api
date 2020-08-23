import { Length } from 'class-validator';

export class CreateTaskDto {
  @Length(20, 255)
  description!: string;
}
