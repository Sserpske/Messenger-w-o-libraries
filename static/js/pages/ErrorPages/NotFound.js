import ErrorPage from "./ErrorPage.js";
export default class NotFound extends ErrorPage {
    constructor(props) {
        props = props ? props : {};
        Object.assign(props, data);
        super(props);
    }
}
const data = {
    error_code: '404',
    error_text: 'Такой страницы у нас нет.'
};
