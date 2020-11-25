import main_field_template from './main-field.tmpl';
import Block from '../../modules/Block';
import {props_type} from '../../types/Types';

export default class MainField extends Block {
  constructor(props: props_type) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(main_field_template);
    const {wrapper_class, fields} = this.props;

    return template({wrapper_class, fields});
  }
}
