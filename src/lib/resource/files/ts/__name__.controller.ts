import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { <%= classify(name) %>Service } from './<%= name %>.service';
import {Create<%= singular(classify(name)) %>Dto, Update<%= singular(classify(name)) %>Dto} from './dto'
import { <%= classify(name) %> } from './entities/<%= name %>.entity';
@Crud({
  model:{
    type:<%= singular(classify(name)) %>
  },
  dto:{
    create:Create<%= singular(classify(name)) %>Dto,
    replace:Update<%= singular(classify(name)) %>Dto
  }
})
@ApiBearerAuth()
@ApiTags('<%= dasherize(name) %>')
@Controller('<%= dasherize(name) %>')
export class <%= classify(name) %>Controller {

  constructor(private readonly <%= lowercased(name) %>Service: <%= classify(name) %>Service) {
  }
}
