import Router from "./Router";
import Block from "../modules/Block";

describe('Тест роутера', () => {
  class TestComponent extends Block {
    render: () => '<button>Сохранить</button>';
  }

  const router = new Router('.root');

  router.use('/', TestComponent)
    .use('/chat', TestComponent)
    .use('/404', TestComponent)
    .start();

  test('Добавление в history при переходе по страницам', () => {
    router.go('/chat');
    router.go('/');
    router.back();
    router.back();

    expect(window.history).toHaveLength(3);
  })

  test('Переход по ссылкам с помощью go()', () => {
    router.go('/chat');

    expect(window.location.pathname).toBe('/chat');
  })
});
