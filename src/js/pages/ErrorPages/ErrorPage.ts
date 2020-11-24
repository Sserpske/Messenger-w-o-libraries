import error_template from './error.tmpl.js';
import Block from '../../modules/Block.js';
import {props_type} from '../../types/Types.js';

export default class ErrorPage extends Block {
  constructor(props: props_type) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(error_template);

    return template(this.props);
  }
}
