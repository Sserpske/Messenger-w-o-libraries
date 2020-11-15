import message_template from "./message.tmpl.js";
import Block from "../../modules/Block.js";
export default class MainField extends Block {
    constructor(props) {
        super('div', props);
    }
    render() {
        const template = Handlebars.compile(message_template);
        const { messages_list, title, avatar, id } = this.props.messages_data;
        return template({ messages_list, title, avatar, id });
    }
}
