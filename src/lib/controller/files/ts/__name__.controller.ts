import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: '',
  },
})
@Controller('<%= dasherize(name) %>')
export class <%= classify(name) %>Controller {}
