import { Length, IsBoolean, IsOptional } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @Length(20, 255)
  description?: string;

  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
}
