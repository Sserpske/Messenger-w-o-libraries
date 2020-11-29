import ErrorPage from './ErrorPage';
import { propsType } from '../../types/types';

export default class NotFound extends ErrorPage {
  constructor(props?: propsType) {
    props = props || {};
    Object.assign(props, data);

    super(props);
  }
}

const data = {
  error_code: '404',
  error_text: 'Такой страницы у нас нет.',
};
