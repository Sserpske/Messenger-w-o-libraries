import chat_card_template from './chat-card.tmpl';
import Block from '../../modules/Block';
import { propsType } from '../../types/types';
import * as Handlebars from 'handlebars'

export default class MainField extends Block {
  constructor(props: propsType) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(chat_card_template);
    const { chat_cards_data } = this.props;

    return template({ chat_cards_data });
  }
}
