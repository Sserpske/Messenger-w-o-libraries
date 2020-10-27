import EventBus, {IEventBus} from "./EventBus.js";
import { props_type } from "../types/Types.js"

export interface IBlock {
  _element: HTMLElement,
  _meta: {
    tagName: string,
    props: {}
  },
  props: {},
  eventBus: () => EventBus,
  _registerEvents(EventBus: IEventBus): void,
  _createResources(): void,
  init(): void,
  _componentDidMount(): void,
  componentDidMount(): void,
  _componentDidUpdate(): void,
  componentDidUpdate(): void,
  setProps(nextProps:{}): void,
  _render(): void,
  render(): string,
  getContent(): HTMLElement
}

export default class Block implements IBlock {
  _element: HTMLElement;
  _meta: {
    tagName: string,
    props: {}
  };
  props: props_type;
  eventBus: () => EventBus;

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update"
  }

  constructor(tagName: string = 'div', props: object = {}) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: IEventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init(): void {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount(): void {
    this._render();

    this.componentDidMount();
  }

  componentDidMount(): void {
  }

  _componentDidUpdate(): void {
    this._render();

    this.componentDidUpdate();
  }

  componentDidUpdate(): void {
  }

  setProps = (nextProps: {}): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): HTMLElement {
    return this._element;
  }

  _render(): void {
    this._element.innerHTML = this.render();
  }

  // Может переопределять пользователь, необязательно трогать
  render(): string {
    return '';
  }

  getContent(): HTMLElement {
    return this.element;
  }

  _makePropsProxy(props: object) {
    props = new Proxy(props, {
      set: (target: {[key: string]: string}, prop: keyof {}, value: any): boolean => {
        target[prop] = value;

        this.eventBus().emit(Block.EVENTS.FLOW_CDU);
        return true;
      },

      deleteProperty() {
        throw new Error('нет доступа');
      }
    })

    return props;
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this._element.style.display = 'block';
  }

  hide() {
    this._element.style.display = 'none';
  }
}
