import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  Timestamp,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from '../users/user.entity'

@Entity()
export class UserImc extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User, (user) => user.imcs)
  @JoinColumn({ name: 'user_id' })
  userId: User

  @Column()
  height: number

  @Column()
  weight: number

  @Column()
  birth_day: Date

  @Column()
  gender: string

  @CreateDateColumn()
  created_at: Timestamp

  @UpdateDateColumn()
  updated_at: Timestamp
}
