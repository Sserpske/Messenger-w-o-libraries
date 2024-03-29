import auth_template from '../StartPages/start.tmpl';
import Block from '../../modules/Block';
import MainField from '../../components/MainField/MainField';
import Validate from '../../modules/Validate';
import Button from '../../components/Button/Button';
import Router from '../../Router/Router';
import { propsType } from '../../types/types';
import * as Handlebars from 'handlebars';

export default class StartPages extends Block {
  protected validate: Validate;

  // а тут то почему 'NodeListOf' is not defined, вроде eslint в курсе про ts в проекте
  // eslint-disable-next-line no-undef
  protected fields: NodeListOf<HTMLInputElement> | HTMLInputElement[];

  protected router: Router;

  constructor(props: propsType) {
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
    const { title, fields, button, change_button, page_class, link } = this.props;

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
