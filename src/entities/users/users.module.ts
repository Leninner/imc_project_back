import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserImc } from '../user-imc/user-imc.entity';
import { UserFood } from '../user-food/user-food.entity';
import { Schedule } from '../schedule/schedule.entity';
import { Food } from '../food/food.entity';
import { FoodType } from '../food-type/food-type.entity';
import { FoodCat } from '../food-cat/food-cat.entity';
import { FoodController } from '../food/food.controller';
import { FoodService } from '../food/food.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserImc,
      UserFood,
      Schedule,
      Food,
      FoodType,
      FoodCat,
    ]),
  ],
  controllers: [UserController, FoodController], // Agrega FoodController al arreglo de controladores
  providers: [UserService, FoodService], // Agrega FoodService al arreglo de proveedores
})
export class UsersModule {}
