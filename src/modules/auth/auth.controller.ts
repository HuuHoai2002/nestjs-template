import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RedisService } from 'src/shared/redis/redis.service';
import { RequestWithUser } from './auth.interface';
import { AuthService } from './auth.service';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly redis: RedisService,
  ) {}

  @Post('register')
  public async register(@Body() data: RegisterDto) {
    return;
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  public async login(@Request() req: RequestWithUser) {
    return 'login';
  }

  @Post('refresh-token')
  public async refreshToken(@Body() data: RefreshTokenDto) {
    return this.authService.validateRefreshToken(data.refresh_token);
  }

  @Get('set')
  public async set() {
    return this.redis.set('test', 'test');
  }

  @Get('get/:key')
  public async get(@Param('key') key: string) {
    return this.redis.get<typeof key>(key);
  }
}
