import { Module } from '@nestjs/common';
import { CharactersModule } from './character/character.module.js';
import { LocationModule } from './location/location.module.js';
import { EpisodeModule } from './episode/episode.module.js';

@Module({
    imports: [
        CharactersModule,
        LocationModule,
        EpisodeModule,
    ],
})
export class AppModule {}