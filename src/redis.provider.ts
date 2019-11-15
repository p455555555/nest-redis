import * as Redis from 'ioredis';

export const REDIS_CONST = Symbol('REDIS');
export const REDIS_OPTIONS = Symbol('REDIS_OPTIONS');
export interface RedisOptions extends Redis.RedisOptions {
    cluster?: boolean,
    nodes?: Redis.ClusterNode[]
    option?: Redis.ClusterOptions
}
export class RedisClientError extends Error {}

export const reidsProvider = () => ({
    provide: REDIS_CONST,
    useFactory: (options: RedisOptions) => {
        let client: Redis.Redis | Redis.Cluster;

        if (options.cluster && options.nodes) {
            client = new Redis.Cluster(options.nodes, options.option)
        } else {
            client = new Redis(options);
        }
            
        return client;
    },
    inject: [REDIS_OPTIONS]
});
