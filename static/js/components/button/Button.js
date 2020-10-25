import Block from "../../modules/block.js";
import button_template from './button.tmpl.js';
export default class Button extends Block {
    constructor(props) {
        // Создаем враппер дом-элемент button
        super('button', props);
    }
    render() {
        const template = Handlebars.compile(button_template);
        // @ts-ignore
        const { button_class, text } = this.props;
        return template({ button_class, text });
    }
}
