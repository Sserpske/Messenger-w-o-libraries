import Block from "../../modules/Block.js";
import chats_template from "./profile.tmpl.js";
import render from "../../utils/render.js";
class ProfilePage extends Block {
    constructor(props) {
        super('div', props);
    }
    render() {
        const template = Handlebars.compile(chats_template);
        return template(this.props);
    }
}
const page = new ProfilePage({
    first_name: 'Саша',
    email: '26october@gmail.com',
    display_name: 'grey october',
    avatar: 'images/user.jpeg'
});
render('.root', page);
