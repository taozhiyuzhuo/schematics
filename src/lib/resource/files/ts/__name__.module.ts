import { Module } from '@nestjs/common';
import { <%= classify(name) %>Service } from './<%= name %>.service';
import {<%= classify(name) %>Controller } from './<%= name %>.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { <%= classify(name) %> } from './entities/<%= name %>.entity';

@Module({
  controllers: [<%= classify(name) %>Controller],
  providers: [<%= classify(name) %>Service],
  imports:[TypeOrmModule.forFeature([<%= classify(name) %>])]
})
export class <%= classify(name) %>Module {}

