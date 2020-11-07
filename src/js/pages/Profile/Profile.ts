import Block from "../../modules/Block.js";
import chats_template from "./profile.tmpl.js";
import { props_type } from "../../types/Types.js";
import APIClient from "../../API/APIClient.js";
import Router from "../../Router/Router.js";
import AuthStore from "../../modules/AuthStore.js";

export default class ProfilePage extends Block {
  protected apiClient: APIClient;
  protected router: Router;
  protected auth: AuthStore;

  constructor(props: props_type = {}) {
    Object.assign(props, data)

    super('div', props);

    this.apiClient = new APIClient();
    this.router = new Router('.root');
    this.auth = new AuthStore();
  }

  bindEvents() {
    const logout_button = this._element.querySelector('.js-button-logout');

    if (!logout_button) {
      return;
    }

    logout_button.addEventListener('click', () => {
      this.apiClient.logout()
        .then(() => {
          this.auth.deleteInfo();
          this.router.go('/auth');
        })
    });
  }

  componentDidMount() {
    this.bindEvents();
  }

  componentDidUpdate() {
    this.bindEvents();
  }

  render() {
    const template = Handlebars.compile(chats_template);

    return template(this.props);
  }
}

const data = {
  first_name: 'Саша',
  email: '26october@gmail.com',
  display_name: 'grey october',
  avatar: 'images/user.jpeg'
}
