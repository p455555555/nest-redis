import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { RedisModule } from '../src/redis.module';

// redis配置，可以写在专门的配置文件里面
const options = {
	port: 6379,
	host: 'xxxxxxxx',
	password: 'xxxxxx',
	db: 1
};
/**
 * test模块
 * @class AppModule
 */
@Module({
	imports: [ 
		RedisModule.forRoot(options)
	],
	controllers: [TestController],
})

export class TestModule{}
