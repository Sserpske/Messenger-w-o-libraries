import error_template from './error.tmpl';
import Block from '../../modules/Block';
import { propsType } from '../../types/types';
import * as Handlebars from 'handlebars'

export default class ErrorPage extends Block {
  constructor(props: propsType) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(error_template);

    return template(this.props);
  }
}
