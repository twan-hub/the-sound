import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistNamesController } from './artist-names/names.controller';
import { ArtistNamesService } from './artist-names/names.service.spec';

@Module({
  imports: [],
  controllers: [AppController, ArtistNamesController],
  providers: [AppService, ArtistNamesService],
})
export class AppModule {}
