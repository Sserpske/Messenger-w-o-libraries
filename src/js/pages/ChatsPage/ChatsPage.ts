import Block from "../../modules/Block.js";
import chats_template from "./chats.tmpl.js";
import no_chat_selected from "./no_chat_selected.tmpl.js";
import ChatCard from "../../components/ChatCard/ChatCard.js";
import Message from "../../components/Message/Message.js";
import messages_data from "./messages_data.js";
import {props_type} from "../../types/Types.js";
import Button from "../../components/Button/Button.js";
import MainField from "../../components/MainField/MainField.js";
import Validate from "../../modules/Validate.js";
import getObjectById from "../../utils/getObjectByValue.js";
import ChatUsers from "../../components/ChatUsers/ChatUsers.js";
import AuthStore from "../../modules/AuthStore.js";

export default class ChatsPage extends Block {
  private chats_list: props_type;
  private messages_list: props_type;
  private users_container: HTMLElement | null;
  private auth: AuthStore;
  constructor() {
    super('div', {
      chat_cards: null,
      messages: no_chat_selected,
      create_chat_button: new Button({
        button_class: 'messenger-app__new-chat-button js-create-chat',
        text: 'Создать чат'
      }),
      new_chat_input: new MainField({
        fields: [{
          field_class: 'messenger-app__new-chat-field',
          type: 'text',
          name: 'title',
          label: 'Придумайте название чата',
          error_message: 'Введите не менее 3 символов',
          validation_type: 'text'
        }],
      })
    });
  }

  renderChatCards () {
    return this.apiClient.getChats()
      .then((chats_list: []) => {
        this.chats_list = chats_list.reverse();

        this.setProps({ chat_cards: new ChatCard({
            chat_cards_data: this.chats_list
          }).render()
        });
      })
      .catch();
  }

  getMessagesData (id: Number) {
    const chat_data = getObjectById(this.chats_list, id);

    if (!chat_data) {
      return;
    }

    this.messages_list = {};
    Object.assign(this.messages_list, chat_data);
    this.messages_list.messages_list = messages_data;

    this.setProps({ messages: new Message({
        messages_data: this.messages_list
      }).render()
    });

    const chat_window: HTMLElement | null =  this._element.querySelector('.messenger-app__chat-window');

    if (!chat_window) {
      return;
    }

    chat_window.scrollTop = chat_window.scrollHeight;
  }

  bindEvents() {
    this.initSelectChatEvent();
    this.initContextMenuEvent();
    this.initCreateChatEvent();
    this.users_container = this._element.querySelector('.messenger-app__users-container');
  }

  initSelectChatEvent () {
    const select_chat: NodeList = this._element.querySelectorAll('.js-select-chat');

    select_chat.forEach((element: HTMLElement) => {
      element.addEventListener('click', () => {
        const id: Number = Number(element.dataset.chatId);

        this.getMessagesData(id);
        this.initDeleteChatEvent();
        this.initDocumentEvents();
        this.initUploadChatAvatar();
        this.initShowUsersEvent();
        this.initShowAvailableToAddUsers();
      })
    });
  }

  initShowAvailableToAddUsers() {
    const button: HTMLElement | null = this._element.querySelector('.js-add-users');

    if (!button) {
      return;
    }

    const chat_id: string | undefined = button.dataset.chatId;
    const action: string | undefined = button.dataset.action;

    if (!chat_id || !action) {
      return;
    }

    button.addEventListener('click', () => {
      this.renderAvailableToAddUsers(action)
        .then(() => {
          this.initAddUsersEvent(chat_id);
        })
    });
  }

  renderAvailableToAddUsers(action: string) {
    return this.apiClient.searchUsers()
      .then((response) => {
        if (!this.users_container) {
          return;
        }

        this.users_container.innerHTML = new ChatUsers({
          users: response,
          action: action
        }).render();
      })
  }

  initAddUsersEvent(chat_id: string) {
    const add_button: NodeList = this._element.querySelectorAll('.js-user-add');

    add_button.forEach((element: HTMLElement) => {
      const user_id = element.dataset.userId;
      const user_action = element.dataset.userAction;

      if (!user_id || !user_action) {
        return;
      }

      element.addEventListener('click',() => {
        this.apiClient.addUsersToChat(user_id, chat_id)
          .then(() => {
            return this.renderAvailableToAddUsers(user_action)
          })
          .then(() => {
            this.initAddUsersEvent(chat_id);
          });
      })
    });
  }

  initShowUsersEvent() {
    const button: HTMLElement | null = this._element.querySelector('.js-show-users');

    if (!button) {
      return;
    }

    const chat_id: string | undefined = button.dataset.chatId;
    const action: string | undefined = button.dataset.action;

    if (!chat_id || !action) {
      return;
    }

    button.addEventListener('click', () => {
      this.renderUsersList(action, chat_id)
        .then(() => {
          this.initRemoveUsersEvent(chat_id);
        })
    });
  }

  renderUsersList(action: string, chat_id: string) {
    return this.apiClient.getChatUsers(chat_id)
      .then((response) => {
        if (!this.users_container) {
          return;
        }

        this.users_container.innerHTML = new ChatUsers({
          users: response,
          action: action
        }).render();
      })
  }

  initRemoveUsersEvent(chat_id: string) {
    const delete_button: NodeList = this._element.querySelectorAll('.js-user-delete');

    delete_button.forEach((element: HTMLElement) => {
      const user_id = element.dataset.userId;
      const user_action = element.dataset.userAction;

      if (!user_id || !user_action) {
        return;
      }

      element.addEventListener('click',() => {
        this.apiClient.deleteChatUsers(user_id, chat_id)
          .then(() => {
            return this.renderUsersList(user_action, chat_id)
          })
          .then(() => {
            this.initRemoveUsersEvent(chat_id);
          })
      })
    });
  }

  initUploadChatAvatar() {
    const input: HTMLInputElement | null = this._element.querySelector('.context-menu__avatar-input');

    if (!input) {
      return;
    }

    input.addEventListener('input', (e: any) => {
      const form_data = new FormData();
      const chat_id = e.target.dataset.chatId;

      form_data.append('chatId', chat_id);
      form_data.append('avatar', e.target.files[0]);

      this.apiClient.putChatAvatar(form_data)
        .then(() => {
          return this.renderChatCards();
        })
        .then(() => {
          this.getMessagesData(Number(chat_id));
        })
    });
  }

  initDocumentEvents() {
    document.addEventListener('keyup', (e) => {
      if (e.code === 'Escape') {
        this.setProps({ messages: no_chat_selected });
      }
    })

    document.addEventListener('click', (e) => {
      if (!e.target || !this.users_container) {
        return;
      }

      if ((<HTMLElement>e.target).classList.contains('messenger-app__overlay')) {
        this.users_container.innerHTML = '';

        return false;
      }
    });
  }

  initDeleteChatEvent() {
    const delete_button: HTMLButtonElement | null = this._element.querySelector('.js-delete-chat');

    if (!delete_button) {
      return;
    }

    delete_button.addEventListener('click', () => {
      const chat_id = Number(delete_button.dataset.chatId);

      this.apiClient.deleteChat(chat_id)
        .then(() => {
          this.renderChatCards();
          this.setProps({ messages: no_chat_selected })
        })
    })
  }

  initContextMenuEvent () {
    const buttons: NodeList = this._element.querySelectorAll('.js-toggle-context');

    buttons.forEach((element: HTMLElement) => {
      const menu_type = element.dataset.context;
      const context_menu = this._element.querySelector('.js-context-' + menu_type);

      if (!context_menu) {
        return;
      }

      element.addEventListener('click',() => {
        context_menu.classList.toggle('hidden');
      })
    });
  }

  initCreateChatEvent() {
    const button: HTMLElement | null = this._element.querySelector('.js-create-chat');
    const field: HTMLElement | null = this._element.querySelector('.messenger-app__new-chat-field');
    const fields_data: props_type = {};

    if (!button || !field) {
      return;
    }

    const input: HTMLInputElement | null = field.querySelector('input');
    const validate = new Validate(field);

    if (!input) {
      return;
    }

    button.addEventListener('click', (e: Event) => {
      if (!validate.isFormValid(e)) {
        return;
      }

      fields_data[input.name] = input.value;

      this.apiClient.createChat(fields_data)
        .then(() => {
          this.renderChatCards();
        })
    });
  }

  insertAvatarImage() {
    const avatar: HTMLElement | null = this._element.querySelector('.js-chats-avatar-container');
    const info = this.auth.getInfo();

    if (avatar && info.avatar) {
      avatar.setAttribute('src', `https://ya-praktikum.tech${info.avatar}`)
    }
  }

  componentDidMount() {
    this.bindEvents();
    this.renderChatCards();
    this.auth = new AuthStore();
    this.insertAvatarImage();
  }

  componentDidUpdate() {
    this.bindEvents();
    this.insertAvatarImage();
  }

  render() {
    const template = Handlebars.compile(chats_template);
    const { chat_cards, messages, conversation_name, conversation_img, create_chat_button, new_chat_input } = this.props;

    return template({ chat_cards, messages, conversation_name, conversation_img, create_chat_button: create_chat_button.render(), new_chat_input: new_chat_input.render() });
  }
}
