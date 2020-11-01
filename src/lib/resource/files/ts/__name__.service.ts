import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { <%= classify(name) %> } from './entities/<%= name %>.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class <%= classify(name) %>Service extends TypeOrmCrudService<<%= classify(name) %>> {

  constructor(@InjectRepository(<%= classify(name) %>) repo) {
    super(repo);
  }
}
