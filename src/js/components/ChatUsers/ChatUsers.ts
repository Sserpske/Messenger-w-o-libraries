import Block from '../../modules/Block.js';
import users_template from './chat-users.tmpl.js';
import {props_type} from '../../types/Types.js';

export default class ChatUsers extends Block {
  constructor(props: props_type) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(users_template);

    return template(this.props);
  }
}
