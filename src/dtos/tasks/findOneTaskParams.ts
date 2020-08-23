import { IsUUID } from 'class-validator';

export class FindOneTaskParams {
  @IsUUID(4)
  id: string;
}
