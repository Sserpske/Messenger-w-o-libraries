import chat_card_template from './chat-card.tmpl.js';
import Block from '../../modules/Block.js';
import {props_type} from '../../types/Types.js';

export default class MainField extends Block {
  constructor(props: props_type) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(chat_card_template);
    const {chat_cards_data} = this.props;

    return template({chat_cards_data});
  }
}
