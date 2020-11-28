import main_field_template from './main-field.tmpl';
import Block from '../../modules/Block';
import { propsType } from '../../types/types';
import * as Handlebars from 'handlebars'

export default class MainField extends Block {
  constructor(props: propsType) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(main_field_template);
    const { wrapper_class, fields } = this.props;

    return template({ wrapper_class, fields });
  }
}
