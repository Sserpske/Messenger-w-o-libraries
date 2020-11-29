export interface IEventBus {
  listeners: {
    [key: string]: Function[];
  };
  // я совершенно не вкурил почему линтер ругается на все мои интерфейсы
  // eslint-disable-next-line no-unused-vars
  on(event: string, callback: () => void): void;
  // eslint-disable-next-line no-unused-vars
  off(event: string, callback: () => void): void;
  // eslint-disable-next-line no-unused-vars
  emit(event: string, ...args: []): void;
}

export default class EventBus implements IEventBus {
  listeners: {
    [key: string]: Function[];
  };

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: () => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => void): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
  }

  emit(event: string, ...args: []): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    // eslint-disable-next-line no-unused-vars
    this.listeners[event].forEach((listener: (args?: []) => void) => {
      listener(...args);
    });
  }
}
