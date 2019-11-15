import { Controller, Get } from '@nestjs/common';
import { RedisService } from '../src/redis.service';

/**
 * test
 * @export
 * @class testController
 */
@Controller()
export class TestController {
	constructor(private readonly redis: RedisService) {}

	/**
	 * 设置key
	 */
	@Get('setKey')
	public async setKey() {
		const result = await this.redis.set(`testkey`, 'this is a test meassage', 600);

		return result;
	}

	/**
	 * 获取key
	 */
	@Get('getKey')
	public async getKey() {
		const result = await this.redis.get('testkey');

		return result;
	}

	/**
	 * exists
	 */
	@Get('exists')
	public async exists() {
		const result = await this.redis.exists('testkey');

		return result;
	}

	/**
	 * expire
	 */
	@Get('expire')
	public async expire() {
		const result = await this.redis.expire('testkey', 5600);

		return result;
	}

	/**
	 * persist
	 */
	@Get('persist')
	public async persist() {
		const result = await this.redis.persist('testkey');

		return result;
	}

	/**
	 * del
	 */
	@Get('del')
	public async del() {
		const result = await this.redis.del('testkey');

		return result;
	}

	/**
	 * disconnect
	 */
	@Get('disconnect')
	public async disconnect() {
		const result = await this.redis.disconnect();

		return result;
	}
}
