import auth_template from '../StartPages/start.tmpl.js';
import Block from '../../modules/Block.js';
import MainField from '../../components/MainField/MainField.js';
import Validate from '../../modules/Validate.js';
import Button from '../../components/Button/Button.js';
import Router from '../../Router/Router.js';
import {props_type} from '../../types/Types.js';

export default class StartPages extends Block {
  protected validate: Validate;
  protected fields: NodeListOf<HTMLInputElement> | HTMLInputElement[];
  protected router: Router;

  constructor(props: props_type) {
    super('div', {
      fields: new MainField({
        wrapper_class: props.fields_data.wrapper_class,
        fields: props.fields_data.fields,
      }),
      page_class: props.page_class,
      title: props.title,
      change_button: props.change_button,
      link: props.link,
      button: new Button({
        button_class: props.button.button_class,
        text: props.button.text,
      }),
    });

    this.validate = new Validate(this._element);
    this.router = new Router('.root');
  }

  bindEvents() {}

  componentDidMount() {
    this.bindEvents();
  }

  render() {
    const template = Handlebars.compile(auth_template);
    const {title, fields, button, change_button, page_class, link} = this.props;

    return template({
      fields: fields.render(),
      title,
      button: button.render(),
      change_button,
      page_class,
      link,
    });
  }
}
