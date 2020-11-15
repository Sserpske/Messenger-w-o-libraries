import APIClient from "../API/APIClient.js";
export default class AuthStore {
    constructor() {
        if (AuthStore.__instance) {
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
            sessionStorage.setItem('user_info', user_info);
        }
    }
    getInfo() {
        if (sessionStorage.getItem('user_info')) {
            return JSON.parse(sessionStorage.getItem('user_info'));
        }
    }
    deleteInfo() {
        if (sessionStorage.getItem('user_info')) {
            sessionStorage.removeItem('user_info');
        }
    }
}
