import Block from '../../modules/Block';
import users_template from './chat-users.tmpl';
import {props_type} from '../../types/Types';

export default class ChatUsers extends Block {
  constructor(props: props_type) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(users_template);

    return template(this.props);
  }
}
