import { Entity, Column, ManyToOne, RelationId } from 'typeorm'
import { User } from '../users/user.entity'
import { BaseAppEntity } from '../../utils/base.entity'

@Entity()
export class UserImc extends BaseAppEntity {
  @ManyToOne(() => User, (user) => user.imcs)
  user: User

  @RelationId((userImc: UserImc) => userImc.user)
  @Column()
  userId: number

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  height: number

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  weight: number
}
