import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig, authConfig, awsConfig, redisConfig } from './config';
import { AuthModule } from './modules/auth/auth.module';
import { WebsocketsModule } from './modules/websockets/websockets.module';
import { RedisModule } from './shared/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [authConfig, appConfig, awsConfig, redisConfig],
      envFilePath: [
        '.env',
        '.env.local',
        '.env.development',
        '.env.production',
      ],
    }),
    AuthModule,
    // AwsModule,
    // UploadsModule,
    RedisModule,
    WebsocketsModule,
  ],
})
export class AppModule {}
