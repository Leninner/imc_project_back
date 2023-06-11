import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm'
import { User } from '../users/user.entity'

@Entity()
export class UserImc extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User, (user) => user.user_imcs)
  @JoinColumn({ name: 'user_id' })
  user_id_imc: User

  @Column()
  register_date: Date

  @Column()
  height: number

  @Column()
  weight: number

  @Column()
  birth_day: Date

  @Column()
  gender: string
}
