import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { EpisodeService } from './episode.service.js';

@Controller('episode')
export class EpisodeController {
    constructor(private readonly EpisodeService: EpisodeService) {}

  @Get()
  findAll(@Query('page') page?: string, @Query('name') name?: string) {
    const pageNum = page ? parseInt(page, 10) : 1;
    return this.EpisodeService.findAll(pageNum, name);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.EpisodeService.findOne(id);
  }
}
