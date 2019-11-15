"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis = require("ioredis");
exports.REDIS_CONST = Symbol('REDIS');
exports.REDIS_OPTIONS = Symbol('REDIS_OPTIONS');
class RedisClientError extends Error {
}
exports.RedisClientError = RedisClientError;
exports.reidsProvider = () => ({
    provide: exports.REDIS_CONST,
    useFactory: (options) => {
        let client;
        if (options.cluster && options.nodes) {
            client = new Redis.Cluster(options.nodes, options.option);
        }
        else {
            client = new Redis(options);
        }
        return client;
    },
    inject: [exports.REDIS_OPTIONS]
});
//# sourceMappingURL=redis.provider.js.map