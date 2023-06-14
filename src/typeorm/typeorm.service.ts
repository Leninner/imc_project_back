import { Injectable, Inject } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm'

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get('database.host'),
      port: parseInt(this.config.get('database.port'), 10),
      username: this.config.get('database.user'),
      password: this.config.get('database.password'),
      database: this.config.get('database.name'),
      autoLoadEntities: true,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      synchronize: true,
    }
  }
}
