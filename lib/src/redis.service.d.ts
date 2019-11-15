/// <reference types="node" />
import { Redis } from 'ioredis';
/**
 * redis方法类
 */
export declare class RedisService {
    private readonly redisClient;
    constructor(redisClient: Redis);
    /**
     * redis get方法
     */
    get(key: string): Promise<string | null>;
    /**
     * redis set方法
     */
    set(key: string, data: any, time?: number): Promise<string>;
    /**
     * redis exists方法
     */
    exists(key: string): Promise<number>;
    /**
     * redis expire方法
     */
    expire(key: string, time?: number): Promise<import("v8").DoesZapCodeSpaceFlag>;
    /**
     * redis persist方法
     */
    persist(key: string): Promise<import("v8").DoesZapCodeSpaceFlag>;
    /**
     * redis del方法
     */
    del(key: string): Promise<number>;
    /**
     * redis 关闭链接
     */
    disconnect(): Promise<void>;
}
