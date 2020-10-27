import message_template from "./message.tmpl.js";
import Block from "../../modules/Block.js";
export default class MainField extends Block {
    constructor(props) {
        super('div', props);
    }
    render() {
        const template = Handlebars.compile(message_template);
        // @ts-ignore
        const { messages_data } = this.props;
        return template({ messages_data });
    }
}
