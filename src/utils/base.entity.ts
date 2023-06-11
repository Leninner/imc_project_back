import {
  BaseEntity,
  CreateDateColumn,
  Index,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm'

export class BaseAppEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Index()
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Timestamp

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Timestamp
}
