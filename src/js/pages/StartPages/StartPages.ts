import auth_template from "../StartPages/start.tmpl.js"
import Block from "../../modules/block.js";
import MainField from "../../components/MainField/MainField.js";
import Validate from "../../modules/Validate.js";
import Button from "../../components/button/Button.js";

interface IAuthPage {
  fields_data: {},
  title: string,
  button: {
    text: string;
    button_class: string;
  },
  change_button: string,
  page_class: string,
  link: string
}

export default class StartPages extends Block {
  private validate: any;
  private fields: any;
  constructor(props: IAuthPage) {
    super('div', {
      fields: new MainField({
        // @ts-ignore
        wrapper_class: props.fields_data.wrapper_class,
        // @ts-ignore
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
    // @ts-ignore
    this.validate = new Validate(this._element);
    this.fields = this._element.querySelectorAll('input');

    // @ts-ignore
    const button = this._element.querySelector('.js-send-form');
    // @ts-ignore
    button.addEventListener('click', (e) => {
      const fields_data = {};
      e.preventDefault();

      if (this.validate.isFormValid()) {
        this.fields.forEach((input: HTMLInputElement) => {
          // @ts-ignore
          fields_data[input.name] = input.value;
        })

        console.log(fields_data);
      }
    })
  }

  componentDidMount() {
    this.bindEvents();
  }

  render() {
    // @ts-ignore
    const template = Handlebars.compile(auth_template);
    // @ts-ignore
    const { title, fields, button, change_button, page_class, link } = this.props;

    // @ts-ignore
    return template({ fields: fields.render(), title, button: button.render(), change_button, page_class, link });
  }
}
