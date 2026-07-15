import { PartialType } from '@nestjs/mapped-types';
import { CreateTypstDto } from './create-typst.dto';

export class UpdateTypstDto extends PartialType(CreateTypstDto) {}
