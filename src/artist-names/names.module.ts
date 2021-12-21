import { Module } from '@nestjs/common';
import { ArtistNamesController } from './names.controller';
import { ArtistNamesService } from './names.service.spec';

@Module({
  imports: [],
  controllers: [ArtistNamesController],
  providers: [ArtistNamesService],
})
export class NamesModule {}
