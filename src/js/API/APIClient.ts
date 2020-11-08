import HTTPTransport from "../modules/HTTPTransport.js";
import {props_type} from "../types/Types";

const API_URL = 'https://ya-praktikum.tech/api/v2';
const ENDPOINTS = {
  SIGNUP: '/auth/signup',
  SIGNIN: '/auth/signin',
  USER_INFO: '/auth/user',
  LOGOUT: '/auth/logout',
  CHATS: '/chats',
}

export default class APIClient {
  private httpTransport: HTTPTransport;
  private static __instance: APIClient;

  constructor() {
    this.httpTransport = new HTTPTransport();

    //@ts-ignore
    if (APIClient.__instance) {
      //@ts-ignore
      return APIClient.__instance;
    }

    APIClient.__instance = this;
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

  getChats() {
    return this.httpTransport.get(this.getUrl(ENDPOINTS.CHATS))
      .then((response: XMLHttpRequest) => JSON.parse(response.response));
  }

  createChat(data: props_type) {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    };

    return this.httpTransport.post(this.getUrl(ENDPOINTS.CHATS), options)
      .then((response: XMLHttpRequest) => JSON.parse(response.response));
  }

  logout() {
    return this.httpTransport.post(this.getUrl(ENDPOINTS.LOGOUT));
  }

  deleteChat(chat_id: Number) {
    const data = {
      chatId: chat_id
    }
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    };

    return this.httpTransport.delete(this.getUrl(ENDPOINTS.CHATS), options);
  }

  getUrl(path: string) {
    return API_URL + path;
  }
}
