import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public async validateRefreshToken(
    refreshToken: string,
  ): Promise<{ access_token: string }> {
    try {
      const verify = this.jwtService.verify(refreshToken, {
        secret: this.configService.get('auth.jwtRefreshSecret'),
      });

      return {
        access_token: '',
      };
    } catch (error) {}
  }

  // public jwtGenerateResponse(data: Payload): JwtGenerateResponse {
  //   // payload is the data that will be encoded in the JWT
  //   const payload: JwtPayload = {
  //     sub: data.user_id,
  //     email: data.email,
  //   };

  //   return {
  //     access_token: this.jwtService.sign(payload),
  //     refresh_token: this.generateRefreshToken(payload.sub),
  //   };
  // }

  // private generateAccessToken(payload: JwtPayload) {
  //   return this.jwtService.sign(payload, {
  //     secret: this.configService.get('auth.jwtAccessSecret'),
  //     expiresIn: this.configService.get('auth.jwtAccessExpiration'),
  //   });
  // }

  private generateRefreshToken(sub: number): string {
    return this.jwtService.sign(
      { sub },
      {
        secret: this.configService.get('auth.jwtRefreshSecret'),
        expiresIn: this.configService.get('auth.jwtRefreshExpiration'),
      },
    );
  }

  private async verifyPassword(
    hashedPassword: string,
    plainTextPassword: string,
  ): Promise<boolean> {
    return argon2.verify(hashedPassword, plainTextPassword);
  }
}
