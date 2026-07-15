import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypstService } from './typst.service';
import { CreateTypstDto } from './dto/create-typst.dto';
import { UpdateTypstDto } from './dto/update-typst.dto';

@Controller('typst')
export class TypstController {
  constructor(private readonly typstService: TypstService) {}

  @Post()
  create(@Body() createTypstDto: CreateTypstDto) {
    return this.typstService.create(createTypstDto);
  }

  @Get()
  findAll() {
    return this.typstService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typstService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypstDto: UpdateTypstDto) {
    return this.typstService.update(+id, updateTypstDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typstService.remove(+id);
  }
}
