import HTTPTransport from '../modules/HTTPTransport.js';
import {props_type} from '../types/Types';

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

  signup(data: props_type) {
    const options = {
      data: JSON.stringify(data),
    };

    return this.httpTransport.post(ENDPOINTS.SIGNUP, options);
  }

  signin(data: props_type) {
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

  createChat(data: props_type) {
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

  deleteChat(chat_id: Number) {
    const data = {
      chatId: chat_id,
    };
    const options = {
      data: JSON.stringify(data),
    };

    return this.httpTransport.delete(ENDPOINTS.CHATS, options);
  }

  putChatAvatar(data: FormData) {
    const options = {
      headers: {},
      data: data,
    };

    return this.httpTransport.put(ENDPOINTS.CHATS_AVATAR, options);
  }

  getChatUsers(chat_id: string) {
    const options = {
      headers: {},
    };
    const url = `${ENDPOINTS.CHATS}/${chat_id}/users`;

    return this.httpTransport
      .get(url, options)
      .then((response: XMLHttpRequest) => JSON.parse(response.response));
  }

  deleteChatUsers(user_id: string, chat_id: string) {
    const options = {
      data: JSON.stringify({
        users: [user_id],
        chatId: chat_id,
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

  addUsersToChat(user_id: string, chat_id: string) {
    const options = {
      data: JSON.stringify({
        users: [user_id],
        chatId: chat_id,
      }),
    };

    return this.httpTransport.put(ENDPOINTS.CHATS_USERS, options);
  }

  updateUserProfile(data: props_type) {
    const options = {
      data: JSON.stringify(data),
    };

    return this.httpTransport.put(ENDPOINTS.USER_PROFILE, options);
  }

  updateUserPassword(data: props_type) {
    const options = {
      data: JSON.stringify(data),
    };

    return this.httpTransport.put(ENDPOINTS.USER_PASSWORD, options);
  }

  updateUserAvatar(data: FormData) {
    const options = {
      headers: {},
      data: data,
    };

    return this.httpTransport.put(ENDPOINTS.USER_AVATAR, options);
  }
}
