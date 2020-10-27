import render from "../../utils/render.js";
import StartPages from "./StartPages.js";

const page = new StartPages({
  title: 'Регистрация',
  page_class: 'registration',
  change_button: 'Войти',
  link: '/auth.html',
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
        type: 'text',
        name: 'login',
        label: 'Логин',
        error_message: 'Длина логина должна быть не менее 3 символов',
        validation_type: 'text'
      },
      {
        field_class: 'primary-form__fields-item',
        type: 'text',
        name: 'phone',
        label: 'Телефон',
        error_message: 'Не правильный номер',
        validation_type: 'phone'
      },
      {
        field_class: 'primary-form__fields-item',
        type: 'text',
        name: 'first_name',
        label: 'Имя',
        error_message: 'Укажите имя',
        validation_type: 'text'
      },
      {
        field_class: 'primary-form__fields-item',
        type: 'text',
        name: 'second_name',
        label: 'Фамилия',
        error_message: 'Укажите фамилию',
        validation_type: 'text'
      },
      {
        field_class: 'primary-form__fields-item',
        type: 'password',
        name: 'password',
        label: 'Пароль',
        error_message: 'Не менее 8 символов, строчных и прописных букв и цифр',
        validation_type: 'password'
      },
    ],
  },
  button: {
    button_class: 'primary-form__button',
    text: 'Зарегистрироваться'
  }
});

render('.root', page);
