import auth_template from "../StartPages/start.tmpl.js";
import Block from "../../modules/Block.js";
import MainField from "../../components/MainField/MainField.js";
import Validate from "../../modules/Validate.js";
import Button from "../../components/Button/Button.js";
export default class StartPages extends Block {
    constructor(props) {
        super('div', {
            fields: new MainField({
                wrapper_class: props.fields_data.wrapper_class,
                fields: props.fields_data.fields
            }),
            page_class: props.page_class,
            title: props.title,
            change_button: props.change_button,
            link: props.link,
            button: new Button({
                button_class: props.button.button_class,
                text: props.button.text
            })
        });
    }
    bindEvents() {
        this.validate = new Validate(this._element);
        this.fields = this._element.querySelectorAll('input');
        const button = this._element.querySelector('.js-send-form');
        if (button) {
            button.addEventListener('click', (e) => {
                const fields_data = {};
                e.preventDefault();
                if (this.validate.isFormValid(e)) {
                    this.fields.forEach((input) => {
                        fields_data[input.name] = input.value;
                    });
                    console.log(fields_data);
                }
            });
        }
    }
    componentDidMount() {
        this.bindEvents();
    }
    render() {
        const template = Handlebars.compile(auth_template);
        const { title, fields, button, change_button, page_class, link } = this.props;
        return template({ fields: fields.render(), title, button: button.render(), change_button, page_class, link });
    }
}
