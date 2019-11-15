
import { Test, TestingModule } from '@nestjs/testing';
import { TestModule } from './test.module';
import { TestController } from './test.controller';

describe('TestController', () => {
    let testController: TestController;

    beforeAll(async () => {
        const app: TestingModule  = await Test.createTestingModule({
            controllers: [TestController],
            imports: [TestModule],
        }).compile();

        testController = app.get<TestController>(TestController);
    });

    it('set 测试', async () => {
        const result = await testController.setKey();

        expect(result).toBe('OK');
    });

    it('get 测试', async () => {
        const result = await testController.getKey();

        expect(result).toBe('this is a test meassage');
    });

    it('exists 测试', async () => {
        const result = await testController.exists();

        expect(result).toBe(1);
    });

    it('expire 测试', async () => {
        const result = await testController.expire();

        expect(result).toBe(1);
    });

    it('persist 测试', async () => {
        const result = await testController.persist();

        expect(result).toBe(1);
    });

    it('del 测试', async () => {
        const result = await testController.del();

        expect(result).toBe(1);
    });

    afterAll(async () => {
        await testController.disconnect();
    });
});
