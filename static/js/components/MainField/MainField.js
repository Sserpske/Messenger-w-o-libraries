import main_field_template from "./main-field.tmpl.js";
import Block from "../../modules/Block.js";
export default class MainField extends Block {
    constructor(props) {
        super('div', props);
    }
    render() {
        const template = Handlebars.compile(main_field_template);
        const { wrapper_class, fields } = this.props;
        return template({ wrapper_class, fields });
    }
}
