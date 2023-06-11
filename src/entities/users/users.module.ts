import { Module } from '@nestjs/common'
import { UserController } from './users.controller'
import { UserService } from './users.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity'
import { UserImc } from '../user-imc/user-imc.entity'
import { UserFood } from '../user-food/user-food.entity'
import { Schedule } from '../schedule/schedule.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User, UserImc, UserFood, Schedule])],
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule {}
