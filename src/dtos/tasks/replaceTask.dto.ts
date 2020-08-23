import { Length, IsBoolean } from 'class-validator';

export class ReplaceTaskDto {
  @Length(20, 255)
  description: string;

  @IsBoolean()
  isDone: boolean;
}
