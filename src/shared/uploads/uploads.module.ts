import { Module } from '@nestjs/common';
import { AwsModule } from './../aws/aws.module';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './uploads.service';

@Module({
  imports: [AwsModule],
  providers: [UploadsService],
  controllers: [UploadsController],
})
export class UploadsModule {}
