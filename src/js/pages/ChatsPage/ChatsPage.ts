import Block from "../../modules/Block.js";
import chats_template from "./chats.tmpl.js";
import render from "../../utils/render.js";
import ChatCard from "../../components/ChatCard/ChatCard.js";
import Message from "../../components/Message/Message.js";

interface IChatsPage {
  messages_data: {},
  chat_cards_data: {},
  conversation_name: string,
  conversation_img?: string
}

class ChatsPage extends Block {
  constructor(props: IChatsPage) {
    super('div', {
      chat_cards: new ChatCard({
        chat_cards_data: props.chat_cards_data
      }),
      messages: new Message({
        messages_data: props.messages_data
      }),
      conversation_name: props.conversation_name,
      conversation_img: props.conversation_img
    });
  }

  bindEvents() {
    const button: NodeList = this._element.querySelectorAll('.js-toggle-context');

    if (!button) {
      return;
    }

    button.forEach((element: HTMLElement) => {
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
  }

  render() {
    const template = Handlebars.compile(chats_template);
    const { chat_cards, messages, conversation_name, conversation_img } = this.props;

    return template({ chat_cards: chat_cards.render(), messages: messages.render(), conversation_name, conversation_img });
  }
}

const page = new ChatsPage({
  conversation_name: 'Женя',
  conversation_img: '/images/user2.jpeg',
  chat_cards_data: [
    {
      avatar: 'images/user2.jpeg',
      name: 'Женя',
      preview: 'Изображение',
      time: '10:10',
      new_messages_number: 2
    },
    {
      avatar: '',
      name: 'Киноклуб',
      preview: 'Стикер',
      time: '10:46'
    },
    {
      avatar: '',
      name: 'Илья',
      preview: 'Друзья, у меня для вас особенный выпуск новостей! Лалaлалалала',
      time: '11:11',
      new_messages_number: 8
    },
    {
      avatar: '',
      name: 'Вадим',
      preview: 'Привет!',
      time: '12:55',
    },
    {
      avatar: '',
      name: 'Design Destroyer',
      preview: 'В 2008 году художник Jon Rafman начал собирать и не собрал',
      time: 'Ср',
    },
    {
      avatar: '',
      name: 'Киноклуб',
      preview: 'Стикер',
      time: 'Ср',
    },
    {
      avatar: '',
      name: 'Илья',
      preview: 'Друзья, у меня для вас особенный выпуск новостей! Лалaлалалала',
      time: 'Ср',
    },
    {
      avatar: '',
      name: 'Вадим',
      preview: 'Привет!',
      time: 'Ср',
    },
    {
      avatar: '',
      name: 'Design Destroyer',
      preview: 'В 2008 году художник Jon Rafman начал собирать и не собрал',
      time: 'Ср',
    },
    {
      avatar: '',
      name: 'Киноклуб',
      preview: 'Стикер',
      time: 'Ср',
    },
    {
      avatar: '',
      name: 'Илья',
      preview: 'Друзья, у меня для вас особенный выпуск новостей! Лалaлалалала',
      time: 'Ср',
    },
    {
      avatar: '',
      name: 'Вадим',
      preview: 'Привет!',
      time: 'Ср',
    },
    {
      avatar: '',
      name: 'Design Destroyer',
      preview: 'В 2008 году художник Jon Rafman начал собирать и не собрал',
      time: 'Ср',
    },
  ],
  messages_data: [
    {
      message_body: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
        '                <br>\n' +
        '                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
      message_time: '11:56',
    },
    {
      message_body: 'Привет! Смотри, тут всплыл интересный кусок .',
      message_time: '11:56',
    },
    {
      message_body: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
        '                <br>\n' +
        '                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
      message_time: '11:57',
    },
    {
      message_body: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n' +
        '                <br>\n' +
        '                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
      message_time: '',
    },
    {
      message_body: 'Привет!',
      message_time: '10:10',
      own: true,
    },
    {
      message_body: 'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
      message_time: '12:06',
      own: true,
    },

  ]
});

render('.root', page);
