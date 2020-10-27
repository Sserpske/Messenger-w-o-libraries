import auth_template from "./edit_profile.tmpl.js";
import Block from "../../modules/Block.js";
import MainField from "../../components/MainField/MainField.js";
import Validate from "../../modules/Validate.js";
import Button from "../../components/Button/Button.js";
import render from "../../utils/render.js";
class EditProfile extends Block {
    constructor(props) {
        super('div', {
            fields: new MainField({
                wrapper_class: props.fields_data.wrapper_class,
                fields: props.fields_data.fields
            }),
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
        if (!button) {
            return;
        }
        button.addEventListener('click', (e) => {
            const fields_data = {};
            e.preventDefault();
            if (!this.validate.isFormValid(e)) {
                return;
            }
            this.fields.forEach((input) => {
                fields_data[input.name] = input.value;
            });
            console.log(fields_data);
        });
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
const page = new EditProfile({
    fields_data: {
        wrapper_class: 'primary-form__fields-wrapper',
        fields: [
            {
                field_class: 'primary-form__fields-item',
                type: 'email',
                name: 'email',
                label: 'Почта',
                error_message: 'Не правильная почта',
                validation_type: 'email'
            },
            {
                field_class: 'primary-form__fields-item',
                type: 'text',
                name: 'login',
                label: 'Логин',
                error_message: 'Длина логина должна быть не менее 3 символов',
                validation_type: 'text'
            },
            {
                field_class: 'primary-form__fields-item',
                type: 'text',
                name: 'phone',
                label: 'Телефон',
                error_message: 'Не правильный номер',
                validation_type: 'phone'
            },
            {
                field_class: 'primary-form__fields-item',
                type: 'text',
                name: 'display_name',
                label: 'Отображаемое имя',
                error_message: 'Отображаемое имя не должно быть короче 3 символов',
                validation_type: 'text'
            },
            {
                field_class: 'primary-form__fields-item',
                type: 'text',
                name: 'first_name',
                label: 'Имя',
                error_message: 'Имя не должно быть короче 3 символов',
                validation_type: 'text'
            },
            {
                field_class: 'primary-form__fields-item',
                type: 'text',
                name: 'second_name',
                label: 'Фамилия',
                error_message: 'Укажите фамилию',
                validation_type: 'text'
            },
            {
                field_class: 'primary-form__fields-item',
                type: 'password',
                name: 'oldPassword',
                label: 'Старый пароль',
                error_message: 'Не менее 8 символов, строчных и прописных латинских букв и цифр',
                validation_type: 'password'
            },
            {
                field_class: 'primary-form__fields-item',
                type: 'password',
                name: 'newPassword',
                label: 'Новый пароль',
                error_message: 'Не менее 8 символов, строчных и прописных латинских букв и цифр',
                validation_type: 'password'
            },
        ],
    },
    button: {
        button_class: 'primary-form__button',
        text: 'Сохранить'
    }
});
render('.root', page);
