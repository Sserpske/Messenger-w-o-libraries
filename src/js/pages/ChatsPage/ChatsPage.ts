import Block from "../../modules/Block.js";
import chats_template from "./chats.tmpl.js";
import no_chat_selected from "./no_chat_selected.tmpl.js";
import ChatCard from "../../components/ChatCard/ChatCard.js";
import Message from "../../components/Message/Message.js";
import messages_data from "./messages_data.js";
import { props_type } from "../../types/Types.js";
import Button from "../../components/Button/Button.js";
import MainField from "../../components/MainField/MainField.js";
import Validate from "../../modules/Validate.js";
import getObjectById from "../../utils/getObjectByValue.js";

export default class ChatsPage extends Block {
  private chats_list: props_type;
  private messages_list: props_type;
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
    this.apiClient.getChats()
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
  }

  initSelectChatEvent () {
    const select_chat: NodeList = this._element.querySelectorAll('.js-select-chat');

    select_chat.forEach((element: HTMLElement) => {
      element.addEventListener('click', () => {
        const id: Number = Number(element.dataset.chatId);

        this.getMessagesData(id);
        this.initDeleteChatEvent();
        this.initHideChatEvent();
      })
    });
  }

  initHideChatEvent() {
    document.addEventListener('keyup', (e) => {
      if (e.code === 'Escape') {
        this.setProps({ messages: no_chat_selected });
      }
    })
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

  componentDidMount() {
    this.bindEvents();
    this.renderChatCards();
  }

  componentDidUpdate() {
    this.bindEvents();
  }

  render() {
    const template = Handlebars.compile(chats_template);
    const { chat_cards, messages, conversation_name, conversation_img, create_chat_button, new_chat_input } = this.props;

    return template({ chat_cards, messages, conversation_name, conversation_img, create_chat_button: create_chat_button.render(), new_chat_input: new_chat_input.render() });
  }
}
