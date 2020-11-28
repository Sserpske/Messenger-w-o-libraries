import Block from '../../modules/Block';
import chats_template from './profile.tmpl';
import Router from '../../Router/Router';
import AuthStore from '../../modules/AuthStore';
import * as Handlebars from 'handlebars'

export default class ProfilePage extends Block {
  protected router: Router;

  protected auth: AuthStore;

  private info: {};

  constructor() {
    super('div', {
      profile: null,
    });

    this.router = new Router('.root');
  }

  bindEvents() {
    const logout_button = this._element.querySelector('.js-button-logout');

    if (!logout_button) {
      return;
    }

    logout_button.addEventListener('click', () => {
      this.apiClient.logout().then(() => {
        this.auth.deleteInfo();
        this.router.go('/auth');
      });
    });
  }

  renderProfileInfo() {
    this.info = this.auth.getInfo();

    this.setProps({
      profile: {
        ...this.info,
      },
    });
  }

  componentDidMount() {
    this.auth = new AuthStore();
    this.renderProfileInfo();
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
