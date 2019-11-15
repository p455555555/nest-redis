"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const redis_provider_1 = require("./redis.provider");
/**
 * redis方法类
 */
let RedisService = class RedisService {
    constructor(redisClient) {
        this.redisClient = redisClient;
    }
    /**
     * redis get方法
     */
    async get(key) {
        const data = await this.redisClient.get(key);
        return data;
    }
    /**
     * redis set方法
     */
    async set(key, data, time = 3600) {
        const result = await this.redisClient.set(key, data, 'EX', time);
        return result;
    }
    /**
     * redis exists方法
     */
    async exists(key) {
        const result = await this.redisClient.exists(key);
        return result;
    }
    /**
     * redis expire方法
     */
    async expire(key, time = 3600) {
        const result = await this.redisClient.expire(key, time);
        return result;
    }
    /**
     * redis persist方法
     */
    async persist(key) {
        const result = await this.redisClient.persist(key);
        return result;
    }
    /**
     * redis del方法
     */
    async del(key) {
        const result = await this.redisClient.del(key);
        return result;
    }
    /**
     * redis 关闭链接
     */
    async disconnect() {
        const result = await this.redisClient.disconnect();
        return result;
    }
};
RedisService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(redis_provider_1.REDIS_CONST)),
    __metadata("design:paramtypes", [Object])
], RedisService);
exports.RedisService = RedisService;
//# sourceMappingURL=redis.service.js.map