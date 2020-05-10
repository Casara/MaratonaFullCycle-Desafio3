import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('receiver', () => {
    it('should return undefined', () => {
      expect(appController.renderReceive()).toBeUndefined();
    });
  });

  describe('sender', () => {
    it('should return undefined', () => {
      expect(appController.renderSend()).toBeUndefined();
    });
  });
});
