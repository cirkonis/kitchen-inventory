/**
 * This is not a production server yet!
 * This is only a minimal api to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiPrefix = 'api';
  const graphPrefix = 'graphql';
  app.setGlobalPrefix(apiPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('API Listening at http://localhost:' + port + '/' + apiPrefix);
    Logger.log(
      'GraphQl Listening at http://localhost:' + port + '/' + graphPrefix
    );
  });
}

bootstrap();
