import main_field_template from "./main-field.tmpl.js"
import Block from "../../modules/block.js";

export default class MainField extends Block {
  constructor(props: {}) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(main_field_template);
    // @ts-ignore
    const { wrapper_class, fields } = this.props;

    return template({ wrapper_class, fields });
  }
}
