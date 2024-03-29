export default {
  fields_data: {
    wrapper_class: 'primary-form__fields-wrapper',
    fields: [
      {
        field_class: 'primary-form__fields-item',
        type: 'email',
        name: 'email',
        label: 'Почта',
        error_message: 'Не правильная почта',
        validation_type: 'email',
      },
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
        type: 'text',
        name: 'phone',
        label: 'Телефон',
        error_message: 'Не правильный номер',
        validation_type: 'phone',
      },
      {
        field_class: 'primary-form__fields-item',
        type: 'text',
        name: 'display_name',
        label: 'Отображаемое имя',
        error_message: 'Отображаемое имя не должно быть короче 3 символов',
        validation_type: 'text',
      },
      {
        field_class: 'primary-form__fields-item',
        type: 'text',
        name: 'first_name',
        label: 'Имя',
        error_message: 'Имя не должно быть короче 3 символов',
        validation_type: 'text',
      },
      {
        field_class: 'primary-form__fields-item',
        type: 'text',
        name: 'second_name',
        label: 'Фамилия',
        error_message: 'Укажите фамилию',
        validation_type: 'text',
      },
    ],
  },
  fields_password_data: {
    wrapper_class: 'primary-form__fields-wrapper',
    fields: [
      {
        field_class: 'primary-form__fields-item',
        type: 'password',
        name: 'oldPassword',
        label: 'Старый пароль',
        error_message: 'Не менее 8 символов, строчных и прописных букв и цифр',
        validation_type: 'password',
      },
      {
        field_class: 'primary-form__fields-item',
        type: 'password',
        name: 'newPassword',
        label: 'Новый пароль',
        error_message: 'Не менее 8 символов, строчных и прописных букв и цифр',
        validation_type: 'password',
      },
    ],
  },
  button_password: {
    button_class: 'primary-form__button js-send-password',
    text: 'Сменить пароль',
  },
  button_data: {
    button_class: 'primary-form__button js-send-form',
    text: 'Сохранить',
  },
};
