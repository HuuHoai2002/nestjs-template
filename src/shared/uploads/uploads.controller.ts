import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AwsService } from '../aws/aws.service';

@Controller('uploads')
@UseInterceptors(FileInterceptor('file'))
export class UploadsController {
  constructor(private readonly awsService: AwsService) {}

  @Post()
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    // return this.awsService.uploadFile(file, req.user.user_id);
    return;
  }
}
