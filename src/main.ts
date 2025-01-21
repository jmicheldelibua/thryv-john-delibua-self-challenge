import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap()
  .then(() =>
    Logger.log(
      `Server started on port ${process.env.PORT ?? 3000}`,
      'Bootstrap',
    ),
  )
  .catch(console.error);
