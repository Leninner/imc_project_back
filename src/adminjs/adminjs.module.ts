import { Module } from '@nestjs/common'
import { UserFood } from '../entities/user-food/user-food.entity'
import { FoodType } from '../entities/food-type/food-type.entity'
import { FoodCat } from '../entities/food-cat/food-cat.entity'
import { UserImc } from '../entities/user-imc/user-imc.entity'
import { Schedule } from '../entities/schedule/schedule.entity'
import { Food } from '../entities/food/food.entity'
import * as AdminJSTypeorm from '@adminjs/typeorm'
import AdminJS from 'adminjs'
import { AdminModule } from '@adminjs/nestjs'
import componentLoader, { SOME_CUSTOM_COMPONENT } from './componentLoader'
import { UserResource } from './resources/user.resource'
import { config } from './config'

AdminJS.registerAdapter({
  Resource: AdminJSTypeorm.Resource,
  Database: AdminJSTypeorm.Database,
})

const DEFAULT_ADMIN = {
  email: 'lenin@tinkin.one',
  password: 'hello',
  role: 'admin',
}

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }

  return null
}

const usuarios = {
  name: 'Usuarios',
  icon: 'User',
}
const alimentacion = {
  name: 'Alimentacion',
  icon: 'Archive',
}

UserResource.options.navigation = usuarios

const UserImcResource = { resource: UserImc, options: { navigation: usuarios } }
const UserFoodResource = {
  resource: UserFood,
  options: { navigation: usuarios },
}
const FoodResource = { resource: Food, options: { navigation: alimentacion } }
const FoodCatResource = {
  resource: FoodCat,
  options: { navigation: alimentacion },
}
const FoodTypeResource = {
  resource: FoodType,
  options: { navigation: alimentacion },
}
const ScheduleResource = {
  resource: Schedule,
  options: { navigation: alimentacion },
}

@Module({
  imports: [
    AdminModule.createAdminAsync({
      useFactory: () => ({
        auth: {
          authenticate,
          cookieName: 'adminjs',
          cookiePassword: 'secret',
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: 'secret',
        },
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            UserResource,
            ScheduleResource,
            UserImcResource,
            UserFoodResource,
            FoodResource,
            FoodCatResource,
            FoodTypeResource,
          ],
          dashboard: {
            component: SOME_CUSTOM_COMPONENT,
          },
          componentLoader,
          locale: {
            language: 'en',
            translations: config,
          },
        },
      }),
    }),
  ],
})
export class AdminJsModule {}
