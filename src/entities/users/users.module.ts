import { Module } from '@nestjs/common'
import { UserController } from './users.controller'
import { UserService } from './users.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity'
import { UserImc } from '../user-imc/user-imc.entity'
import { UserFood } from '../user-food/user-food.entity'
import { Schedule } from '../schedule/schedule.entity'
import { Food } from '../food/food.entity'
import { FoodType } from '../food-type/food-type.entity'
import { Category } from '../categories/category.entity'
import { FoodController } from '../food/food.controller'
import { FoodService } from '../food/food.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserImc,
      UserFood,
      Schedule,
      Food,
      FoodType,
      Category,
    ]),
  ],
  controllers: [UserController, FoodController],
  providers: [UserService, FoodService],
})
export class UsersModule {}
