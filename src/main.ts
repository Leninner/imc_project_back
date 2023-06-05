import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { APP_PORTS } from './constants/app-constants'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  await app.listen(APP_PORTS.HTTP)
}
bootstrap()
