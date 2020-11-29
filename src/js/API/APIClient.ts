import HTTPTransport from '../modules/HTTPTransport';
import { propsType } from '../types/types';

const ENDPOINTS = {
  SIGNUP: '/auth/signup',
  SIGNIN: '/auth/signin',
  USER_INFO: '/auth/user',
  LOGOUT: '/auth/logout',
  CHATS: '/chats',
  CHATS_AVATAR: '/chats/avatar',
  CHATS_USERS: '/chats/users',
  USER_SEARCH: '/user/search',
  USER_PROFILE: '/user/profile',
  USER_PASSWORD: '/user/password',
  USER_AVATAR: '/user/profile/avatar',
};

export default class APIClient {
  private httpTransport: HTTPTransport;

  private static __instance: APIClient;

  constructor() {
    this.httpTransport = new HTTPTransport();

    if (APIClient.__instance) {
      return APIClient.__instance;
    }

    APIClient.__instance = this;
  }

  signup(data: propsType) {
    const options = {
      data: JSON.stringify(data),
    };

    return this.httpTransport.post(ENDPOINTS.SIGNUP, options);
  }

  signin(data: propsType) {
    const options = {
      data: JSON.stringify(data),
    };

    return this.httpTransport.post(ENDPOINTS.SIGNIN, options);
  }

  getUser() {
    const options = {
      headers: {},
    };

    return this.httpTransport.get(ENDPOINTS.USER_INFO, options);
  }

  getChats() {
    const options = {
      headers: {},
    };

    return this.httpTransport
      .get(ENDPOINTS.CHATS, options)
      .then((response: XMLHttpRequest) => JSON.parse(response.response));
  }

  createChat(data: propsType) {
    const options = {
      data: JSON.stringify(data),
    };

    return this.httpTransport
      .post(ENDPOINTS.CHATS, options)
      .then((response: XMLHttpRequest) => JSON.parse(response.response));
  }

  logout() {
    const options = {
      headers: {},
    };

    return this.httpTransport.post(ENDPOINTS.LOGOUT, options);
  }

  deleteChat(chatId: Number) {
    const data = {
      chatId,
    };
    const options = {
      data: JSON.stringify(data),
    };

    return this.httpTransport.delete(ENDPOINTS.CHATS, options);
  }

  putChatAvatar(data: FormData) {
    const options = {
      headers: {},
      data,
    };

    return this.httpTransport.put(ENDPOINTS.CHATS_AVATAR, options);
  }

  getChatUsers(chatId: number) {
    const options = {
      headers: {},
    };
    const url = `${ENDPOINTS.CHATS}/${chatId}/users`;

    return this.httpTransport
      .get(url, options)
      .then((response: XMLHttpRequest) => JSON.parse(response.response));
  }

  deleteChatUsers(userId: number, chatId: number) {
    const options = {
      data: JSON.stringify({
        users: [userId],
        chatId,
      }),
    };

    return this.httpTransport.delete(ENDPOINTS.CHATS_USERS, options);
  }

  searchUsers() {
    const options = {
      data: JSON.stringify({
        login: '',
      }),
    };

    return this.httpTransport
      .post(ENDPOINTS.USER_SEARCH, options)
      .then((response: XMLHttpRequest) => JSON.parse(response.response));
  }

  addUsersToChat(userId: number, chatId: number) {
    const options = {
      data: JSON.stringify({
        users: [userId],
        chatId,
      }),
    };

    return this.httpTransport.put(ENDPOINTS.CHATS_USERS, options);
  }

  updateUserProfile(data: propsType) {
    const options = {
      data: JSON.stringify(data),
    };

    return this.httpTransport.put(ENDPOINTS.USER_PROFILE, options);
  }

  updateUserPassword(data: propsType) {
    const options = {
      data: JSON.stringify(data),
    };

    return this.httpTransport.put(ENDPOINTS.USER_PASSWORD, options);
  }

  updateUserAvatar(data: FormData) {
    const options = {
      headers: {},
      data,
    };

    return this.httpTransport.put(ENDPOINTS.USER_AVATAR, options);
  }
}
