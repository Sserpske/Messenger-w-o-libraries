import queryStringify from "../utils/queryStringify.js";
const API_URL = 'https://ya-praktikum.tech/api/v2';
const DEFAULT_HEADER = {
    'Content-Type': 'application/json'
};
const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE'
};
export default class HTTPTransport {
    constructor() {
        this.get = (url, options = {}) => {
            const { data = {} } = options;
            url = url + queryStringify(data);
            return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.GET }));
        };
        this.request = (url, options, timeout = 5000) => {
            const { method, data, headers = DEFAULT_HEADER } = options;
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
                    }
                    else {
                        reject(xhr);
                    }
                };
                Object.keys(headers).forEach((key) => {
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
                }
                else {
                    xhr.send(data);
                }
            });
        };
    }
    put(url, options = {}) {
        return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.PUT }));
    }
    post(url, options = {}) {
        return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.POST }));
    }
    delete(url, options = {}) {
        return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.DELETE }));
    }
    getUrl(path) {
        return API_URL + path;
    }
}
