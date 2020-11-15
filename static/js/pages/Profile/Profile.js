import Block from "../../modules/Block.js";
import chats_template from "./profile.tmpl.js";
import Router from "../../Router/Router.js";
import AuthStore from "../../modules/AuthStore.js";
export default class ProfilePage extends Block {
    constructor() {
        super('div', {
            profile: null
        });
        this.router = new Router('.root');
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
            });
        });
    }
    renderProfileInfo() {
        this.info = this.auth.getInfo();
        this.setProps({
            profile: Object.assign({}, this.info)
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
