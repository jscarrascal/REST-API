import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { CharactersService } from './character.service.js';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  findAll(@Query('page') page?: string, @Query('name') name?: string) {
    const pageNum = page ? parseInt(page, 10) : 1;
    return this.charactersService.findAll(pageNum, name);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.charactersService.findOne(id);
  }
}