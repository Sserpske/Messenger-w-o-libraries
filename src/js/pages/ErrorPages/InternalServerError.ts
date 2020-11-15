import ErrorPage from "./ErrorPage.js";
import {props_type} from "../../types/Types";

export default class InternalServerError extends ErrorPage {
  constructor(props?: props_type) {
    props = props ? props : {};
    Object.assign(props, data)

    super(props);
  }
}

const data = {
  error_code: '500',
  error_text: 'На сервере произошла ошибка. <br>\n' +
    '        Мы уже знаем об этом и работаем над исправлением.'
};
