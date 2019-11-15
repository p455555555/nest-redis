import { DynamicModule } from '@nestjs/common';
import { RedisOptions } from './redis.provider';
/**
 * 全局模块
 * @export
 * @class BaseModule
 */
export declare class RedisModule {
    static forRoot(options: RedisOptions | RedisOptions[] | string): DynamicModule;
}
