import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { APP_PORTS } from './constants/app-constants'
import { AppModule } from './app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  await app.listen(APP_PORTS.HTTP, '0.0.0.0')
}
bootstrap()
