import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheService: Cache) {}

  async get<T>(key: string): Promise<T> {
    return await this.cacheService.get(key);
  }

  async set(key: string, value: unknown, ttl?: number): Promise<void> {
    await this.cacheService.set(key, value, ttl);
  }

  async delete(key: string): Promise<void> {
    await this.cacheService.del(key);
  }

  async reset(): Promise<void> {
    await this.cacheService.reset();
  }
}
