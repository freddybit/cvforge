import { Test, TestingModule } from '@nestjs/testing';
import { TypstController } from './typst.controller';
import { TypstService } from './typst.service';

describe('TypstController', () => {
  let controller: TypstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypstController],
      providers: [TypstService],
    }).compile();

    controller = module.get<TypstController>(TypstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
