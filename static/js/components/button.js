import Block from "../modules/block.js";
import render from "../utils/render";
class Button extends Block {
    constructor(props) {
        // Создаем враппер дом-элемент button
        super('button', props);
    }
    render() {
        // В проект должен быть ваш собственный шаблонизатор
        // return `<div>${this.props.text}</div>`;
    }
}
const button = new Button({
    text: 'Click me',
});
// app — это id дива в корне DOM
render(".app", button);
// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
    button.setProps({
        text: 'Click me, please',
    });
}, 1000);
//# sourceMappingURL=button.js.map