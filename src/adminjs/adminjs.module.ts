import { Module } from '@nestjs/common'
import { User } from '../entities/users/user.entity'
import { UserFood } from '../entities/user-food/user-food.entity'
import { FoodType } from '../entities/food-type/food-type.entity'
import { FoodCat } from '../entities/food-cat/food-cat.entity'
import { UserImc } from '../entities/user-imc/user-imc.entity'
import { Schedule } from '../entities/schedule/schedule.entity'
import { Food } from '../entities/food/food.entity'
import * as AdminJSTypeorm from '@adminjs/typeorm'
import AdminJS from 'adminjs'

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

@Module({
  imports: [
    import('@adminjs/nestjs').then(({ AdminModule }) => {
      return AdminModule.createAdminAsync({
        useFactory: () => ({
          // componentLoader,
          // dashboard: {
          //   component: Components.MyInput,
          // },
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
              User,
              Schedule,
              UserImc,
              UserFood,
              Food,
              FoodCat,
              FoodType,
            ],
          },
        }),
      })
    }),
  ],
})
export class AdminJsModule {}
