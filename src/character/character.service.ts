import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CharactersService {
  private readonly url = 'https://rickandmortyapi.com/api/character';

  constructor(private readonly httpService: HttpService) {}

  async findAll(page: number = 1, name?: string) {
    try {
      const query = name ? `?page=${page}&name=${name}` : `?page=${page}`;
      const { data } = await firstValueFrom(this.httpService.get(`${this.url}${query}`));
      return data;
    } catch (error) {
      throw new HttpException('Personajes no encontrados', HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: number) {
    try {
      const { data } = await firstValueFrom(this.httpService.get(`${this.url}/${id}`));
      return data;
    } catch (error) {
      throw new HttpException('Personaje con ID ${id} no encontrado', HttpStatus.NOT_FOUND);
    }
  }
}