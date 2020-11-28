import Block from '../../modules/Block';
import button_template from './button.tmpl';
import { props_type } from '../../types/Types';

export default class Button extends Block {
  constructor(props: props_type) {
    super('button', props);
  }

  render() {
    const template = Handlebars.compile(button_template);
    const { button_class, text } = this.props;

    return template({ button_class, text });
  }
}
