
[![npm version](https://badge.fury.io/js/%40nest-public%2Fnest-redis.svg)](https://badge.fury.io/js/%40nest-public%2Fnest-redis)

# nest-redis
[Nest](https://github.com/nestjs/nest) 框架Redis插件 封装了一些redis常用操作

## 安装

```bash
$ npm install @nest-public/nest-redis --save
```

## 用法
config.js 配置 具体请参考[ioredis](https://github.com/luin/ioredis) 
```javascript
// 单客户端
export const config = {
	port: 6379,
	host: 'xxx.xxxx.xxx',
	password: 'xxxxxxxxxxxxxxxxxx',
	db: 0
};

// 集群配置
export const config = {
	cluster: true,
	nodes: [
		{
			port: 6379,
			host: 'xxx.xxxx.xxx',
			password: 'xxxxxxxxxxxxxxxxxx',
			db: 0
		},
		{
			port: 6379,
			host: 'xxx.xxxx.xxx',
			password: 'xxxxxxxxxxxxxxxxxx',
			db: 0
		}
	],
	option: {
		// ioredis集群设置
	}
}
```
module.ts
```javascript
import { AppController } from './test.controller';
import { RedisModule } from '@nest-public/nest-redis';
import { config } from '../config/config.js';

@Module({
	imports: [ 
		RedisModule.forRoot(config)
	],
	controllers: [AppController],
})

export class AppModule{}
```
controller.ts
```javascript
import { Controller, Req, Post, Get, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { OSS } from '@nest-public/nest-oss';

/**
 * AppController
 * @export
 * @class AppController
 */
@Controller()
export class AppController {
	constructor(private readonly oss: OSS) {}

	/**
	 * 设置key
	 */
	@Get('setKey')
	public async setKey() {
		const result = await this.redis.set(`testkey`, 'this is a test meassage', 600); // set(key:string, data:any, ttl？:number); ttl默认3600秒 成功返回 'OK'

		return result;
	}

	/**
	 * 获取key
	 */
	@Get('getKey')
	public async getKey() {
		const result = await this.redis.get('testkey'); // get(key: string);

		return result;
	}

	/**
	 * 效验key是否存在
	 */
	@Get('exists')
	public async exists() {
		const result = await this.redis.exists('testkey'); // exists(key: string); 成功返回 1

		return result;
	}

	/**
	 * 设置到期时间
	 */
	@Get('expire')
	public async expire() {
		const result = await this.redis.expire('testkey', 5600); // expire(key: string, time: number); 成功返回 1

		return result;
	}

	/**
	 * 设置key永不过期
	 */
	@Get('persist')
	public async persist() {
		const result = await this.redis.persist('testkey'); // persist(key: string); 成功返回 1

		return result;
	}

	/**
	 * 删除key
	 */
	@Get('del')
	public async del() {
		const result = await this.redis.del('testkey'); // del(key: string); 成功返回 1

		return result;
	}
}
```

## 测试
进行单元测试前请先配置好 test.module.ts 里面的redis配置
```bash
# jest tests
$ npm run test
```
