import { Entity, Column, OneToMany } from 'typeorm'
import { UserFood } from '../user-food/user-food.entity'
import { UserImc } from '../user-imc/user-imc.entity'
import { BaseAppEntity } from '../../utils/base.entity'
import { IsEmail, Min } from 'class-validator'

const MIN_LENGTH = 6

@Entity()
export class User extends BaseAppEntity {
  @Column()
  @Min(MIN_LENGTH)
  name: string

  @Column()
  @Min(MIN_LENGTH)
  lastName: string

  @Column()
  password: string

  @Column({ unique: true })
  @IsEmail()
  email: string

  @Column()
  birthday: Date

  @Column()
  gender: string

  @Column({ default: false })
  verified: boolean

  @OneToMany(() => UserImc, (userImc) => userImc.userId)
  imcs: UserImc[]

  @OneToMany(() => UserFood, (userFood) => userFood.userId)
  userFood: UserFood[]
}
