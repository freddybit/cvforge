import { Module } from '@nestjs/common';
import { TypstService } from './typst.service';
import { TypstController } from './typst.controller';

@Module({
  controllers: [TypstController],
  providers: [TypstService],
})
export class TypstModule {}
