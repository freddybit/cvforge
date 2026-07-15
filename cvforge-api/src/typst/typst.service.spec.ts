import { Test, TestingModule } from '@nestjs/testing';
import { TypstService } from './typst.service';

describe('TypstService', () => {
  let service: TypstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypstService],
    }).compile();

    service = module.get<TypstService>(TypstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
