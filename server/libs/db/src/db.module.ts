import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { databaseProviders } from './database.providers';

@Module({
  imports:[],
  providers: [DbService,...databaseProviders],
  exports: [DbService],...databaseProviders  ,
})
export class DbModule {}
