import ErrorPage from './ErrorPage';
import { propsType } from '../../types/types';

export default class InternalServerError extends ErrorPage {
  constructor(props?: propsType) {
    props = props || {};
    Object.assign(props, data);

    super(props);
  }
}

const data = {
  error_code: '500',
  error_text:
    'На сервере произошла ошибка. <br>\n'
    + '        Мы уже знаем об этом и работаем над исправлением.',
};
