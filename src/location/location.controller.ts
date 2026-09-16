import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { LocationService } from './location.service.js';

@Controller('location')
export class LocationController {
    constructor(private readonly LocationService: LocationService) {}
    
      @Get()
      findAll(@Query('page') page?: string, @Query('name') name?: string) {
        const pageNum = page ? parseInt(page, 10) : 1;
        return this.LocationService.findAll(pageNum, name);
      }
    
      @Get(':id')
      findOne(@Param('id', ParseIntPipe) id: number) {
        return this.LocationService.findOne(id);
      }
}
