import HTTPTransport from "./HTTPTransport";

describe('Тест HTTPTransport', () => {
  const options = {
    method: 'POST',
    data: {
      email: 'test@jest.com',
      login: 'test',
      password: 'jest',
    },
  };

  test('Тест положительного POST запроса', () => {
    const httpTransport = new HTTPTransport();
    const mock = jest.fn();
    XMLHttpRequest.prototype.send = mock;

    httpTransport.post('https://ya.ru', options);
    expect(mock).toBeCalled();
  });

  test('Тест положительного GET запроса', () => {
    const httpTransport = new HTTPTransport();
    const mock = jest.fn();
    XMLHttpRequest.prototype.send = mock;

    httpTransport.get('https://ya.ru', options);
    expect(mock).toBeCalled();
  });

  test('Тест POST запроса без url', () => {
    const httpTransport = new HTTPTransport();
    const mock = jest.fn();
    XMLHttpRequest.prototype.send = mock;

    // Игнор для того, чтобы TS позволил
    // передать в метод данные неверного типа
    // @ts-ignore
    httpTransport.post(options);
    expect(mock).not.toBeCalled();
  });
});
