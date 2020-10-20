export default class EventBus {
    private listeners: {
      [key: string]: []
    };
    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: () => {}) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        // @ts-ignore
      this.listeners[event].push(callback);
    }

    off(event: string, callback: any) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        // @ts-ignore
      this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event: string, ...args: []) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function(listener: () => {}) {
            listener(...args);
        });
    }
}
