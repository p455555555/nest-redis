import * as Redis from 'ioredis';
export declare const REDIS_CONST: unique symbol;
export declare const REDIS_OPTIONS: unique symbol;
export interface RedisOptions extends Redis.RedisOptions {
    cluster?: boolean;
    nodes?: Redis.ClusterNode[];
    option?: Redis.ClusterOptions;
}
export declare class RedisClientError extends Error {
}
export declare const reidsProvider: () => {
    provide: symbol;
    useFactory: (options: RedisOptions) => Redis.Redis | Redis.Cluster;
    inject: symbol[];
};
