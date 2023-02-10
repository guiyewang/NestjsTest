import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { databaseProviders } from './database.providers';
import { connection } from 'mongoose';
import { User } from '../models/user.model';


@Module({
  imports:[],
  providers: [DbService,...databaseProviders],
  exports: [DbService],...databaseProviders  ,
})
export class DbModule {}
