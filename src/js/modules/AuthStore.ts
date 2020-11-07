import APIClient from "../API/APIClient.js";

export default class AuthStore {
  private apiClient: APIClient;

  constructor() {
    this.apiClient = new APIClient();
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

  setInfo(user_info: string) {
    sessionStorage.setItem('user_info', user_info);
  }

  getInfo() {
    if (sessionStorage.getItem('user_info')) {
      return sessionStorage.getItem('user_info');
    }
  }
}
