import { Users } from '@prisma/client';
import { Request } from 'express';

export interface JwtGenerateResponse {
  access_token: string;
  refresh_token: string;
}

// data from jwt token
export interface JwtPayload {
  sub: number;
  email: string;
}

// data from request
export interface Payload {
  user_id: number;
  email: string;
}

export interface LoginResponse extends Partial<Users> {
  token: JwtGenerateResponse;
}

export interface RequestWithUser extends Request {
  user: Payload;
}
