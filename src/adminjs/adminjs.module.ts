import { Module } from '@nestjs/common'
import { UserFood } from '../entities/user-food/user-food.entity'
import { FoodType } from '../entities/food-type/food-type.entity'
import { UserImc } from '../entities/user-imc/user-imc.entity'
import { Schedule } from '../entities/schedule/schedule.entity'
import * as AdminJSTypeorm from '@adminjs/typeorm'
import AdminJS from 'adminjs'
import { AdminModule } from '@adminjs/nestjs'
import { componentLoader, Components } from './components'
import { UserResource } from './resources/user.resource'
import { config } from './config'
import { CustomResource } from './admin.resource'
import { alimentacion, FoodResource } from './resources/food.resource'
import { CategoriesResource } from './resources/category.resource'

AdminJS.registerAdapter({
  Resource: CustomResource,
  Database: AdminJSTypeorm.Database,
})

const DEFAULT_ADMIN = {
  email: '1',
  password: '1',
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

UserResource.options.navigation = usuarios

const UserImcResource = { resource: UserImc, options: { navigation: usuarios } }
const UserFoodResource = {
  resource: UserFood,
  options: { navigation: usuarios },
}

const FoodTypeResource = {
  resource: FoodType,
  options: {
    navigation: alimentacion,
  },
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
          pages: {
            Reportes_Graficos: {
              label: "Reportes Graficos",
              component: Components.MyChartComponent,
            },
          },
          resources: [
            UserResource,
            ScheduleResource,
            UserImcResource,
            UserFoodResource,
            FoodResource,
            CategoriesResource,
            FoodTypeResource,
          ],
          dashboard: {
            component: Components.MyChartComponent,
          },
          locale: {
            language: 'en',
            translations: config,
          },
          branding: {
            companyName: 'FitBite-Controla tus Habitos',
            withMadeWithLove: false,
            logo: 'https://qoxzrfkrxmcuotcpqbdd.supabase.co/storage/v1/object/sign/imgs/logoAdmin.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL2xvZ29BZG1pbi5zdmciLCJpYXQiOjE2ODY4NDI2ODAsImV4cCI6MTcxODM3ODY4MH0.XfsGXzvYFJa0TjSy3OCRUIBchCg6ObFWzyd1_Zzl20k&t=2023-06-15T15%3A24%3A40.669Z',
          },
          componentLoader,
        },
      }),
    }),
  ],
})
export class AdminJsModule {}
