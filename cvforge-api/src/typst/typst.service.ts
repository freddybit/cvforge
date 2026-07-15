import { Injectable } from '@nestjs/common';
import { CreateTypstDto } from './dto/create-typst.dto';
import { UpdateTypstDto } from './dto/update-typst.dto';

@Injectable()
export class TypstService {
  create(createTypstDto: CreateTypstDto) {
    return 'This action adds a new typst';
  }

  findAll() {
    return `This action returns all typst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typst`;
  }

  update(id: number, updateTypstDto: UpdateTypstDto) {
    return `This action updates a #${id} typst`;
  }

  remove(id: number) {
    return `This action removes a #${id} typst`;
  }
}
