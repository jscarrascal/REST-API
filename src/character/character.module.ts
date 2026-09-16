import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CharactersController } from './character.controller.js';
import { CharactersService } from './character.service.js';

@Module({
  imports: [HttpModule],
  controllers: [CharactersController],
  providers: [CharactersService],
})
export class CharactersModule {}