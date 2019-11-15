import { Module, Global, DynamicModule } from '@nestjs/common';
import { REDIS_OPTIONS, RedisOptions, reidsProvider } from './redis.provider';
import { RedisService } from './redis.service';

/**
 * 全局模块
 * @export
 * @class BaseModule
 */
@Global()
@Module({
	imports: [],
	providers: [RedisService],
	exports: [RedisService]
})

export class RedisModule {
    public static forRoot(options: RedisOptions | RedisOptions[] | string): DynamicModule {

        return {
            module: RedisModule,
            providers: [
                reidsProvider(),
                { provide: REDIS_OPTIONS, useValue: options }
            ],
            exports: [RedisService]
        };
    }
}
