import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { EpisodeController } from './episode.controller.js';
import { EpisodeService } from './episode.service.js';

@Module({
    imports: [HttpModule],
  controllers: [EpisodeController],
  providers: [EpisodeService]
})
export class EpisodeModule {}
