import auth_template from "./edit_profile.tmpl.js";
import Block from "../../modules/Block.js";
import MainField from "../../components/MainField/MainField.js";
import Validate from "../../modules/Validate.js";
import Button from "../../components/Button/Button.js";
import edit_profile_data from "./edit_profile_data.js";
import AuthStore from "../../modules/AuthStore.js";
export default class EditProfile extends Block {
    constructor(props) {
        props = props ? props : {};
        Object.assign(props, edit_profile_data);
        super('div', {
            fields_data: new MainField({
                wrapper_class: props.fields_data.wrapper_class,
                fields: props.fields_data.fields
            }),
            button_data: new Button({
                button_class: props.button_data.button_class,
                text: props.button_data.text
            }),
            fields_password: new MainField({
                wrapper_class: props.fields_password_data.wrapper_class,
                fields: props.fields_password_data.fields
            }),
            button_password: new Button({
                button_class: props.button_password.button_class,
                text: props.button_password.text
            }),
        });
    }
    initUserDataUpdateEvent() {
        const data_form = this._element.querySelector('.profile__user-data-form');
        const button = this._element.querySelector('.js-send-form');
        if (!data_form || !button) {
            return;
        }
        const validate_data = new Validate(data_form);
        const fields = data_form.querySelectorAll('input');
        button.addEventListener('click', (e) => {
            const fields_data = {};
            e.preventDefault();
            if (!validate_data.isFormValid(e)) {
                return;
            }
            fields.forEach((input) => {
                fields_data[input.name] = input.value;
            });
            this.apiClient.updateUserProfile(fields_data)
                .then(() => {
                const current_info = this.auth.getInfo();
                Object.assign(current_info, fields_data);
                this.auth.setInfo(current_info);
            });
        });
    }
    initUserPasswordUpdateEvent() {
        const password_form = this._element.querySelector('.profile__password-data-form');
        const button = this._element.querySelector('.js-send-password');
        if (!password_form || !button) {
            return;
        }
        const validate_password = new Validate(password_form);
        const fields_password = password_form.querySelectorAll('input');
        button.addEventListener('click', (e) => {
            const fields_data = {};
            e.preventDefault();
            if (!validate_password.isFormValid(e)) {
                return;
            }
            fields_password.forEach((input) => {
                fields_data[input.name] = input.value;
            });
            this.apiClient.updateUserPassword(fields_data);
        });
    }
    initUpdateAvatarEvent() {
        const input = this._element.querySelector('.js-profile-update-avatar');
        if (!input) {
            return;
        }
        input.addEventListener('input', (e) => {
            const form_data = new FormData();
            form_data.append('avatar', e.target.files[0]);
            this.apiClient.updateUserAvatar(form_data)
                .then((response) => {
                this.auth.setInfo(response.response);
                this.insertAvatarImage();
            });
        });
    }
    bindEvents() {
        this.initUserDataUpdateEvent();
        this.initUserPasswordUpdateEvent();
        this.initUpdateAvatarEvent();
    }
    insertFieldsValue() {
        const fields = this._element.querySelectorAll('input');
        const info = this.auth.getInfo();
        fields.forEach((field) => {
            const field_name = field.name;
            if (!field_name || !info[field_name]) {
                return;
            }
            field.value = info[field_name];
        });
    }
    insertAvatarImage() {
        const avatar = this._element.querySelector('.js-profile-avatar-container');
        const info = this.auth.getInfo();
        if (avatar && info.avatar) {
            avatar.setAttribute('src', `https://ya-praktikum.tech${info.avatar}`);
        }
    }
    componentDidMount() {
        this.auth = new AuthStore();
        this.insertFieldsValue();
        this.insertAvatarImage();
        this.bindEvents();
    }
    render() {
        const template = Handlebars.compile(auth_template);
        const { title, fields_data, button_data, change_button, page_class, link, fields_password, button_password } = this.props;
        return template({
            fields_data: fields_data.render(),
            button_data: button_data.render(),
            fields_password: fields_password.render(),
            button_password: button_password.render(),
            title,
            change_button,
            page_class,
            link
        });
    }
}