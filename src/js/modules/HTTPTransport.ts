import queryStringify from '../utils/queryStringify';
import {props_type} from '../types/Types';

const API_URL = 'https://ya-praktikum.tech/api/v2';
const DEFAULT_HEADER = {
  'Content-Type': 'application/json',
};
const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

export default class HTTPTransport {
  get = (url: string, options: props_type = {}): Promise<XMLHttpRequest> => {
    const {data = {}} = options;
    url = url + queryStringify(data);

    return this.request(url, {...options, method: METHODS.GET});
  };

  put(url: string, options: props_type = {}): Promise<XMLHttpRequest> {
    return this.request(url, {...options, method: METHODS.PUT});
  }

  post(url: string, options: props_type = {}): Promise<XMLHttpRequest> {
    return this.request(url, {...options, method: METHODS.POST});
  }

  delete(url: string, options: props_type = {}): Promise<XMLHttpRequest> {
    return this.request(url, {...options, method: METHODS.DELETE});
  }

  getUrl(path: string) {
    return API_URL + path;
  }

  request = (
    url: string | any,
    options: props_type,
    timeout: number = 5000
  ): Promise<XMLHttpRequest> => {
    const {method, data, headers = DEFAULT_HEADER} = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (!url || typeof url !== 'string') {
        reject(xhr);
        return;
      }

      const full_url = this.getUrl(url);

      xhr.open(method, full_url);

      xhr.onload = function () {
        if (this.status === 200) {
          resolve(xhr);
        } else {
          reject(xhr);
        }
      };

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.withCredentials = true;
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
