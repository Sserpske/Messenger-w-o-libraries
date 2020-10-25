import not_found_template from "./error.tmpl.js"
import Block from "../../modules/block.js";

export default class ErrorPage extends Block {
  constructor(props: {}) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(not_found_template);

    return template(this.props);
  }
}
