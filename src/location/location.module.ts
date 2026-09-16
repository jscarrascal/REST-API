import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LocationController } from './location.controller.js';
import { LocationService } from './location.service.js';

@Module({
  imports: [HttpModule],
  controllers: [LocationController],
  providers: [LocationService]
})
export class LocationModule {}
