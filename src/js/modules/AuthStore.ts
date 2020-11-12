import APIClient from "../API/APIClient.js";

export default class AuthStore {
  private apiClient: APIClient;
  private static __instance: AuthStore;

  constructor() {
    //@ts-ignore
    if (AuthStore.__instance) {
      //@ts-ignore
      return AuthStore.__instance;
    }

    this.apiClient = new APIClient();

    AuthStore.__instance = this;
  }

  checkAuth() {
    if (sessionStorage.getItem('user_info')) {
      return Promise.resolve();
    }

    return this.apiClient.getUser()
      // @ts-ignore
      .then((response: Promise) => {
        this.setInfo(response.response);

        return Promise.resolve();
      })
      .catch(() => {
        return Promise.reject();
      })
  }

  setInfo(user_info: {} | string) {
    if (typeof user_info !== 'string') {
      user_info = JSON.stringify(user_info);
    }

    if (typeof user_info === 'string') {
      sessionStorage.setItem('user_info', user_info);
    }
  }

  getInfo() {
    if (sessionStorage.getItem('user_info')) {
      return JSON.parse(<string>sessionStorage.getItem('user_info'));
    }
  }

  deleteInfo() {
    if (sessionStorage.getItem('user_info')) {
      sessionStorage.removeItem('user_info');
    }
  }
}
