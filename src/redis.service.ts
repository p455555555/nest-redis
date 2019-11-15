import { Inject, Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { REDIS_CONST } from './redis.provider';

/**
 * redis方法类
 */
@Injectable()
export class RedisService {
    
    constructor(
        @Inject(REDIS_CONST) private readonly redisClient: Redis
    ) {}

    /**
     * redis get方法
     */
    public async get(key: string) {
        const data = await this.redisClient.get(key);

        return data;
    }

    /**
     * redis set方法
     */
    public async set(key: string, data: any, time = 3600) {
        const result = await this.redisClient.set(key, data, 'EX', time);

        return result;
    }

    /**
     * redis exists方法
     */
    public async exists(key: string) {
        const result = await this.redisClient.exists(key);

        return result;
    }

    /**
     * redis expire方法
     */
    public async expire(key: string, time = 3600) {
        const result = await this.redisClient.expire(key, time);

        return result;
    }

    /**
     * redis persist方法
     */
    public async persist(key: string) {
        const result = await this.redisClient.persist(key);

        return result;
    }

    /**
     * redis del方法
     */
    public async del(key: string) {
        const result = await this.redisClient.del(key);

        return result;
    }

    /**
     * redis 关闭链接
     */
    public async disconnect() {
        const result = await this.redisClient.disconnect();

        return result;
    }
}
