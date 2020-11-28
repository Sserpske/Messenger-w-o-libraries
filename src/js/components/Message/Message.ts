import message_template from './message.tmpl';
import Block from '../../modules/Block';
import { propsType } from '../../types/types';
import * as Handlebars from 'handlebars';

export default class MainField extends Block {
  constructor(props: propsType) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(message_template);
    const { messages_list, title, avatar, id } = this.props.messages_data;

    return template({
      messages_list,
      title,
      avatar,
      id,
    });
  }
}
