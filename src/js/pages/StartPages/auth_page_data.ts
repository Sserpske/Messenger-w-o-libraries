export default {
  title: 'Вход',
  change_button: 'Нет аккаунта?',
  page_class: 'authorization',
  link: '/',
  fields_data: {
    wrapper_class: 'primary-form__fields-wrapper',
    fields: [
      {
        field_class: 'primary-form__fields-item',
        type: 'text',
        name: 'login',
        label: 'Логин',
        error_message: 'Длина логина должна быть не менее 3 символов',
        validation_type: 'text',
      },
      {
        field_class: 'primary-form__fields-item',
        type: 'password',
        name: 'password',
        label: 'Пароль',
        error_message: 'Не менее 8 символов, строчных и прописных букв и цифр',
        validation_type: 'password',
      },
    ],
  },
  button: {
    button_class: 'primary-form__button js-send-form',
    text: 'Авторизоваться',
  },
};
