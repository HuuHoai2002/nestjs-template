import {
  BadRequestException,
  ClassSerializerInterceptor,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationError } from 'class-validator';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { FormatResponseInterceptor } from './common/interceptors/format-response.interceptor';
import { OptionalJwtAuthGuard } from './modules/auth/guards/jwt-optional.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableShutdownHooks();

  app.setGlobalPrefix(configService.get('app.apiPrefix'), {
    exclude: ['/'],
  });

  app.use(cookieParser());

  app.useGlobalGuards(new OptionalJwtAuthGuard());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      stopAtFirstError: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      exceptionFactory: (validationErrors: ValidationError[]) => {
        const errors = validationErrors.map((error) => ({
          [error.property.toString()]: Object.values(error.constraints || {}),
        }));
        return new BadRequestException(errors);
      },
    }),
  );

  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector)),
    new FormatResponseInterceptor(),
  );

  // app.useGlobalFilters(new HttpExceptionFilter());
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: configService.get('app.apiVersion'),
  });

  if (configService.get('app.isProduction')) {
    app.enableCors({
      origin: configService.get('app.frontendDomain'),
      methods: configService.get('app.corsMethods'),
      allowedHeaders: configService.get('app.corsHeaders'),
      credentials: configService.get('app.corsCredentials'),
      maxAge: configService.get('app.corsMaxAge'),
    });
  } else {
    app.enableCors({
      allowedHeaders: '*',
      origin: '*',
    });
  }

  await app.listen(configService.get('app.port'));
}

(async () => {
  try {
    await bootstrap();
    console.log(`Server started on port ${process.env.PORT}`);
  } catch (error) {
    throw new Error(`Server failed to start: ${error.message}`);
  }
})();
