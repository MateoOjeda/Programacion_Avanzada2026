import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // rechaza campos que no esten definidos en el dto
      transform: true,
    }),
  );

  const port = process.env.PORT ?? 3003;

  await app.listen(port);

  console.log(`Payments API running on http://localhost:${port}`);
}

bootstrap();