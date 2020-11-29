import Block from '../../modules/Block';
import users_template from './chat-users.tmpl';
import { propsType } from '../../types/types';
import * as Handlebars from 'handlebars';

export default class ChatUsers extends Block {
  constructor(props: propsType) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(users_template);

    return template(this.props);
  }
}
