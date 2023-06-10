import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration from './config'
import { TypeOrmConfigService } from './typeorm/typeorm.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AdminJsModule } from './adminjs/adminjs.module'

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    AdminJsModule,
  ],
})
export class AppModule {}
