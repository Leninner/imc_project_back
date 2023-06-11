import { Entity, Column, OneToMany } from 'typeorm'
import { UserFood } from '../user-food/user-food.entity'
import { UserImc } from '../user-imc/user-imc.entity'
import { BaseAppEntity } from '../../utils/base.entity'

@Entity()
export class User extends BaseAppEntity {
  @Column()
  name: string

  @Column()
  password: string

  @Column()
  email: string

  @Column()
  birthday: Date

  @Column()
  gender: string

  @OneToMany(() => UserImc, (userImc) => userImc.userId)
  imcs: UserImc[]

  @OneToMany(() => UserFood, (userFood) => userFood.userId)
  userFood: UserFood[]
}
