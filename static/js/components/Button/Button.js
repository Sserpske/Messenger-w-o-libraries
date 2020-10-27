import Block from "../../modules/Block.js";
import button_template from './button.tmpl.js';
export default class Button extends Block {
    constructor(props) {
        super('button', props);
    }
    render() {
        const template = Handlebars.compile(button_template);
        const { button_class, text } = this.props;
        return template({ button_class, text });
    }
}
