import render from "../../utils/render.js";
import StartPages from "./StartPages.js";

const page = new StartPages({
  title: 'Вход',
  change_button: 'Нет аккаунта?',
  page_class: 'authorization',
  link: '/',
  fields_data: {
    wrapper_class: 'primary-form__fields-wrapper',
    fields: [
      {
        field_class: 'primary-form__fields-item',
        type: 'email',
        name: 'email',
        label: 'Почта',
        error_message: 'Не правильная почта',
        validation_type: 'email'
      },
      {
        field_class: 'primary-form__fields-item',
        type: 'password',
        name: 'password',
        label: 'Пароль',
        error_message: 'Не менее 8 символов, строчных и прописных букв и цифр',
        validation_type: 'password'
      }
    ],
  },
  button: {
    button_class: 'primary-form__button',
    text: 'Авторизоваться'
  }
});

render('.root', page);
