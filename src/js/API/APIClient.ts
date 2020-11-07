import HTTPTransport from "../modules/HTTPTransport.js";

const API_URL = 'https://ya-praktikum.tech/api/v2';
const ENDPOINTS = {
  SIGNUP: '/auth/signup',
  SIGNIN: '/auth/signin',
  USER_INFO: '/auth/user',
  LOGOUT: '/auth/logout',
}

export default class APIClient {
  private httpTransport: HTTPTransport;

  constructor() {
    this.httpTransport = new HTTPTransport();
  }

  // @ts-ignore
  signup(data) {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    };

    return this.httpTransport.post(this.getUrl(ENDPOINTS.SIGNUP), options);
  }

  // @ts-ignore
  signin(data) {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    };

    return this.httpTransport.post(this.getUrl(ENDPOINTS.SIGNIN), options);
  }

  getUser() {
    return this.httpTransport.get(this.getUrl(ENDPOINTS.USER_INFO));
  }

  logout() {
    return this.httpTransport.post(this.getUrl(ENDPOINTS.LOGOUT));
  }

  getUrl(path: string) {
    return API_URL + path;
  }
}
