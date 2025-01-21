import { typeOrmConfig } from '@core/config';
import { TYPE_ORM_CONFIG_TOKEN } from '@core/constant';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [typeOrmConfig] }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get(TYPE_ORM_CONFIG_TOKEN) as TypeOrmModuleOptions,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  /* empty */
}
