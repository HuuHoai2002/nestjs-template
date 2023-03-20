import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(ROLES_KEY, [
    //   context.getHandler(),
    //   context.getClass(),
    // ]);

    // if (!requiredRoles) {
    //   return true;
    // }

    // const { user } = context.switchToHttp().getRequest<LoginRequest>();
    // const { role } = await this.usersService.getRoles(user.user_id);

    // return requiredRoles.includes(role as any);

    return true;
  }
}
