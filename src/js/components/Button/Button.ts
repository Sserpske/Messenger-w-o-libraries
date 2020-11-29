import Block from '../../modules/Block';
import button_template from './button.tmpl';
import { propsType } from '../../types/types';
import * as Handlebars from 'handlebars';

export default class Button extends Block {
  constructor(props: propsType) {
    super('button', props);
  }

  render() {
    const template = Handlebars.compile(button_template);
    const { button_class, text } = this.props;

    return template({ button_class, text });
  }
}
