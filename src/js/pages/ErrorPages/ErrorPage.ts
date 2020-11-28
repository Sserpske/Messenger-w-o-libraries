import error_template from './error.tmpl';
import Block from '../../modules/Block';
import { props_type } from '../../types/Types';

export default class ErrorPage extends Block {
  constructor(props: props_type) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(error_template);

    return template(this.props);
  }
}
