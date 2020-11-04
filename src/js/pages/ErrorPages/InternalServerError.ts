import ErrorPage from "./ErrorPage.js";

export default class InternalServerError extends ErrorPage {
  // @ts-ignore
  constructor(props?) {
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
