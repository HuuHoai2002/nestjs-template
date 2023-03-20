import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
  jwtRefreshExpiration: process.env.JWT_REFRESH_EXPIRATION,
  jwtAccessExpiration: process.env.JWT_ACCESS_EXPIRATION,
}));
