export interface IEventBus {
  listeners: {
    [key: string]: Function[]
  }
  on(event: string, callback: Function): void;
  off(event: string, callback: Function): void;
  emit(event: string, ...args: []): void;
}

export default class EventBus implements IEventBus {
  listeners: {
    [key: string]: Function[]
  };

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: Function):void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: Function):void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

  emit(event: string, ...args: []):void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(function (listener: () => {}) {
      listener(...args);
    });
  }
}
