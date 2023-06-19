import {
  BaseEntity,
  CreateDateColumn,
  Index,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm'

export class BaseAppEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Index()
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Timestamp

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Timestamp
}
