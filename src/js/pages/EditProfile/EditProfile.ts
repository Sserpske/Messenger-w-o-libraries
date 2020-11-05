import auth_template from "./edit_profile.tmpl.js"
import Block from "../../modules/Block.js";
import MainField from "../../components/MainField/MainField.js";
import Validate from "../../modules/Validate.js";
import Button from "../../components/Button/Button.js";
import edit_profile_data from "./edit_profile_data.js";
import {props_type} from "../../types/Types";

export default class EditProfile extends Block {
  private validate: Validate;
  private fields: NodeListOf<HTMLInputElement> | HTMLInputElement[];

  constructor(props: props_type) {
    props = props ? props : {};

    Object.assign(props, edit_profile_data);

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
      const fields_data: { [key: string]: string } = {};
      e.preventDefault();

      if (!this.validate.isFormValid(e)) {
        return;
      }

      this.fields.forEach((input: HTMLInputElement) => {
        fields_data[input.name] = input.value;
      })

      console.log(fields_data);
    })
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
