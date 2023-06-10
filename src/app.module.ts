import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import configuration from './config'
import { UserController } from './entities/users/users.controller'
import { UserService } from './entities/users/users.service'
import { User } from './entities/users/user.entity'


import('adminjs').then((adminjs) => {
  import('@adminjs/typeorm').then((AdminJSTypeorm) => {
    adminjs.default.registerAdapter({
      Resource: AdminJSTypeorm.Resource,
      Database: AdminJSTypeorm.Database,
    })
  })
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
            branding: {
              companyName: '',
            },
            // resources: [Todo],
          },
        }),
      })
    }),
    ConfigModule.forRoot({ load: [configuration] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
       entities: [__dirname+'/**/*.entity{.ts,.js}'],
       logging: true, 
       synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
