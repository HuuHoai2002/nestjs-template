import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { AwsService } from './aws.service';

@Module({
  imports: [PrismaModule, ConfigModule],
  providers: [AwsService],
  exports: [AwsService],
})
export class AwsModule {}
