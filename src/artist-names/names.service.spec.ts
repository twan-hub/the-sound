import { Injectable } from '@nestjs/common';
import { Names } from 'src/artist-names/interfaces/names.interface';

@Injectable()
export class ArtistNamesService {
  private name: Names[] = [];

  create(name: Names) {
    this.name.push(name);
  }

  findAll(): Names[] {
    return this.name;
  }
}
