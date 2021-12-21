import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { CreateNameDto } from './DTO/create-name.dto';
import { ArtistNamesService } from './names.service.spec';

@Controller('names')
export class ArtistNamesController {
  constructor(private artistNamesService: ArtistNamesService) {}

  @Post()
  @HttpCode(204)
  async create(@Body() createNameDto: CreateNameDto) {
    this.artistNamesService.create(createNameDto);
  }

  @HttpCode(200)
  @Get()
  async findAll(): Promise<any> {
    return this.artistNamesService.findAll();
  }

  @Get('3')
  async findOne(@Param() params): Promise<string> {
    return ' This is an artist name';
  }
}
