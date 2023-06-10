import { Module } from '@nestjs/common'

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
            // resources: [Todo],
          },
        }),
      })
    }),
  ],
})
export class AdminJsModule {}
