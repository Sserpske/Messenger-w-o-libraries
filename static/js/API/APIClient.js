import HTTPTransport from "../modules/HTTPTransport.js";
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
    constructor() {
        this.httpTransport = new HTTPTransport();
        if (APIClient.__instance) {
            return APIClient.__instance;
        }
        APIClient.__instance = this;
    }
    signup(data) {
        const options = {
            data: JSON.stringify(data),
        };
        return this.httpTransport.post(ENDPOINTS.SIGNUP, options);
    }
    signin(data) {
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
        return this.httpTransport.get(ENDPOINTS.CHATS, options)
            .then((response) => JSON.parse(response.response));
    }
    createChat(data) {
        const options = {
            data: JSON.stringify(data),
        };
        return this.httpTransport.post(ENDPOINTS.CHATS, options)
            .then((response) => JSON.parse(response.response));
    }
    logout() {
        const options = {
            headers: {},
        };
        return this.httpTransport.post(ENDPOINTS.LOGOUT, options);
    }
    deleteChat(chat_id) {
        const data = {
            chatId: chat_id,
        };
        const options = {
            data: JSON.stringify(data),
        };
        return this.httpTransport.delete(ENDPOINTS.CHATS, options);
    }
    putChatAvatar(data) {
        const options = {
            headers: {},
            data: data,
        };
        return this.httpTransport.put(ENDPOINTS.CHATS_AVATAR, options);
    }
    getChatUsers(chat_id) {
        const options = {
            headers: {},
        };
        const url = `${ENDPOINTS.CHATS}/${chat_id}/users`;
        return this.httpTransport.get(url, options)
            .then((response) => JSON.parse(response.response));
    }
    deleteChatUsers(user_id, chat_id) {
        const options = {
            data: JSON.stringify({
                users: [user_id],
                chatId: chat_id,
            })
        };
        return this.httpTransport.delete(ENDPOINTS.CHATS_USERS, options);
    }
    searchUsers() {
        const options = {
            data: JSON.stringify({
                login: '',
            }),
        };
        return this.httpTransport.post(ENDPOINTS.USER_SEARCH, options)
            .then((response) => JSON.parse(response.response));
    }
    addUsersToChat(user_id, chat_id) {
        const options = {
            data: JSON.stringify({
                'users': [user_id],
                'chatId': chat_id,
            }),
        };
        return this.httpTransport.put(ENDPOINTS.CHATS_USERS, options);
    }
    updateUserProfile(data) {
        const options = {
            data: JSON.stringify(data),
        };
        return this.httpTransport.put(ENDPOINTS.USER_PROFILE, options);
    }
    updateUserPassword(data) {
        const options = {
            data: JSON.stringify(data),
        };
        return this.httpTransport.put(ENDPOINTS.USER_PASSWORD, options);
    }
    updateUserAvatar(data) {
        const options = {
            headers: {},
            data: data,
        };
        return this.httpTransport.put(ENDPOINTS.USER_AVATAR, options);
    }
}
