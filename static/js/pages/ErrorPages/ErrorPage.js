import error_template from "./error.tmpl.js";
import Block from "../../modules/block.js";
export default class ErrorPage extends Block {
    constructor(props) {
        super('div', props);
    }
    render() {
        const template = Handlebars.compile(error_template);
        return template(this.props);
    }
}
