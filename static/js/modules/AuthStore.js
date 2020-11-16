import APIClient from "../API/APIClient.js";
const USER_INFO_KEY = 'user_info';
export default class AuthStore {
    constructor() {
        if (AuthStore.__instance) {
            return AuthStore.__instance;
        }
        this.apiClient = new APIClient();
        AuthStore.__instance = this;
    }
    checkAuth() {
        if (sessionStorage.getItem(USER_INFO_KEY)) {
            return Promise.resolve();
        }
        return this.apiClient.getUser()
            .then((response) => {
            this.setInfo(response.response);
            return Promise.resolve();
        })
            .catch(() => {
            return Promise.reject();
        });
    }
    setInfo(user_info) {
        if (typeof user_info !== 'string') {
            user_info = JSON.stringify(user_info);
        }
        if (typeof user_info === 'string') {
            sessionStorage.setItem(USER_INFO_KEY, user_info);
        }
    }
    getInfo() {
        if (sessionStorage.getItem(USER_INFO_KEY)) {
            return JSON.parse(sessionStorage.getItem(USER_INFO_KEY));
        }
    }
    deleteInfo() {
        if (sessionStorage.getItem(USER_INFO_KEY)) {
            sessionStorage.removeItem(USER_INFO_KEY);
        }
    }
}
