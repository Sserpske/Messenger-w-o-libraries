import message_template from './message.tmpl';
import Block from '../../modules/Block';
import {props_type} from '../../types/Types';

export default class MainField extends Block {
  constructor(props: props_type) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(message_template);
    const {messages_list, title, avatar, id} = this.props.messages_data;

    return template({messages_list, title, avatar, id});
  }
}
