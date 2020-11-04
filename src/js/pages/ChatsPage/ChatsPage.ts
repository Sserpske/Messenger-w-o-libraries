import Block from "../../modules/Block.js";
import chats_template from "./chats.tmpl.js";
import no_chat_selected from "./no_chat_selected.tmpl.js";
import ChatCard from "../../components/ChatCard/ChatCard.js";
import Message from "../../components/Message/Message.js";
import chat_cards_data from "./chat_cards_data.js";
import messages_data from "./messages_data.js";
import { props_type } from "../../types/Types.js";

// interface IChatsPage {
//   conversation_name: string,
//   conversation_img?: string
// }

export default class ChatsPage extends Block {
  private chats_list: props_type;
  private messages_list: props_type;
  constructor() {
    super('div', {
      chat_cards: null,
      messages: no_chat_selected
    });
  }

  getChatCards () {
    this.chats_list = chat_cards_data;

    this.setProps({ chat_cards: new ChatCard({
        chat_cards_data: this.chats_list
      }).render()
    });

    // setInterval(() => {
    //   this.setProps({ chat_cards: new ChatCard({
    //       chat_cards_data: this.chats_list
    //     }).render()
    //   });
    // }, 3000)
  }

  getMessagesData () {
    this.messages_list = messages_data;

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
    const buttons: NodeList = this._element.querySelectorAll('.js-toggle-context');
    const select_chat: NodeList = this._element.querySelectorAll('.js-select-chat');

    switch (true) {
      // @ts-ignore
      case !!select_chat:
        this.initSelectChatListener(select_chat);
      case !!buttons:
        this.initContextMenuListener(buttons);
    }
  }

  initSelectChatListener (select_chat: NodeList) {
    select_chat.forEach((element: HTMLElement) => {
      element.addEventListener('click', () => {
        this.getMessagesData();
      })
    });
  }

  initContextMenuListener (buttons: NodeList) {
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

  componentDidMount() {
    this.bindEvents();
    this.getChatCards();
  }

  componentDidUpdate() {
    this.bindEvents();
  }

  render() {
    const template = Handlebars.compile(chats_template);
    const { chat_cards, messages, conversation_name, conversation_img } = this.props;

    return template({ chat_cards, messages, conversation_name, conversation_img });
  }
}
