import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  isDone: boolean;
}
