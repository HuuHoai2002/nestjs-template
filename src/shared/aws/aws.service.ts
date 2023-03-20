import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AwsService {
  constructor(
    private prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  private getS3(): S3 {
    return new S3({
      accessKeyId: this.configService.get('aws.awsAccessKeyId'),
      secretAccessKey: this.configService.get('aws.awsSecretAccessKey'),
    });
  }

  async uploadFile(file: Express.Multer.File, user_id: number): Promise<any> {
    const s3 = this.getS3();
    const { originalname, buffer } = file;
    const awsBucketName = <string>this.configService.get('aws.awsS3Bucket');

    const user = await this.prisma.users.findUnique({
      where: {
        id: user_id,
      },
    });

    const key = `${user.username}/${uuid()}-${originalname}`;

    const params = {
      Bucket: awsBucketName,
      Key: key,
      Body: buffer,
    };

    const result = await s3.upload(params).promise();

    // return this.prisma.uploads.create({
    //   data: {
    //     key,
    //     file_type: file.mimetype,
    //     filename: originalname,
    //     file_url: result.Location,
    //     user: {
    //       connect: {
    //         id: user.id,
    //       },
    //     },
    //   },
    // });

    return result;
  }
}
