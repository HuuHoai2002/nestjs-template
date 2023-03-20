import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class FormatResponseInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        if (data && data.password) {
          delete data.password;
        }
        return {
          statusCode: context.switchToHttp().getResponse().statusCode,
          message: data?.message || '',
          success: Boolean(data),
          data,
          timestamp: new Date().toISOString(),
        };
      }),
    );
  }
}
