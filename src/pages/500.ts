import ErrorPage from "../modules/ErrorPage.js";
import render from "../utils/render.js";

const page = new ErrorPage({
  error_code: '500',
  error_text: 'На сервере произошла ошибка. <br>\n' +
    '        Мы уже знаем об этом и работаем над исправлением.'
});

render('.root', page);
