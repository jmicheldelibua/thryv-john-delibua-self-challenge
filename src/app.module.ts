import { dynamoDbConfig, typeOrmConfig } from '@core/config';
import { TYPE_ORM_CONFIG_TOKEN } from '@core/constant';
import { AuthModule } from '@modules/auth';
import { NotificationsModule } from '@modules/notifications';
import { TaskModule } from '@modules/task';
import { UsersModule } from '@modules/users';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [typeOrmConfig, dynamoDbConfig] }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get(TYPE_ORM_CONFIG_TOKEN) as TypeOrmModuleOptions,
    }),
    UsersModule,
    TaskModule,
    AuthModule,
    NotificationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  /* empty */
}
