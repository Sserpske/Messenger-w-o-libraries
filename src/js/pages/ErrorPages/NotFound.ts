import ErrorPage from './ErrorPage';
import {props_type} from '../../types/Types';

export default class NotFound extends ErrorPage {
  constructor(props?: props_type) {
    props = props ? props : {};
    Object.assign(props, data);

    super(props);
  }
}

const data = {
  error_code: '404',
  error_text: 'Такой страницы у нас нет.',
};
