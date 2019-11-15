"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RedisModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const redis_provider_1 = require("./redis.provider");
const redis_service_1 = require("./redis.service");
/**
 * 全局模块
 * @export
 * @class BaseModule
 */
let RedisModule = RedisModule_1 = class RedisModule {
    static forRoot(options) {
        return {
            module: RedisModule_1,
            providers: [
                redis_provider_1.reidsProvider(),
                { provide: redis_provider_1.REDIS_OPTIONS, useValue: options }
            ],
            exports: [redis_service_1.RedisService]
        };
    }
};
RedisModule = RedisModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [],
        providers: [redis_service_1.RedisService],
        exports: [redis_service_1.RedisService]
    })
], RedisModule);
exports.RedisModule = RedisModule;
//# sourceMappingURL=redis.module.js.map