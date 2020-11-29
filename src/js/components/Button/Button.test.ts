import Button from './Button';

describe('Тест Button', () => {
  test('Рендер кнопки Создать чат', () => {
    const rendered = new Button({
      text: 'Создать чат',
      button_class: 'messenger-app__new-chat-button js-create-chat',
    }).render();

    const expected =
      '<button class="messenger-app__new-chat-button js-create-chat main-button">\n' +
      '  <span class="main-button__inner-text">Создать чат</span>\n' +
      '</button>\n';

    expect(rendered).toEqual(expected);
  });

  test('Изменения разметки после setProps', () => {
    const button = new Button({
      text: 'Создать чат',
      button_class: 'messenger-app__new-chat-button js-create-chat',
    });

    button.setProps({ text: 'Удалить чат' });

    const rendered = button.render();

    const expected =
      '<button class="messenger-app__new-chat-button js-create-chat main-button">\n' +
      '  <span class="main-button__inner-text">Удалить чат</span>\n' +
      '</button>\n';

    expect(rendered).toEqual(expected);
  });
});
