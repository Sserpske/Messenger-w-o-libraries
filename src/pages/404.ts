import ErrorPage from "../modules/ErrorPage.js";
import render from "../utils/render.js";

const page = new ErrorPage({
  error_code: '404',
  error_text: 'Такой страницы у нас нет.'
});

render('.root', page);
