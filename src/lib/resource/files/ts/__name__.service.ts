import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { <%= classify(name) %> } from './entities/<%= name %>.entity';

@Injectable()
export class <%= classify(name) %>Service extends TypeOrmCrudService<<%= classify(name) %>> {

  constructor(@InjectRepository(<%= classify(name) %>) repo) {
    super(repo);
  }
}
