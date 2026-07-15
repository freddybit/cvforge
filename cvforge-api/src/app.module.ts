import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypstModule } from './typst/typst.module';

@Module({
  imports: [TypstModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
