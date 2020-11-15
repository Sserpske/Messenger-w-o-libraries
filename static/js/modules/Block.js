import EventBus from "./EventBus.js";
import APIClient from "../API/APIClient.js";
export default class Block {
    constructor(tagName = 'div', props = {}) {
        this.setProps = (nextProps) => {
            if (!nextProps) {
                return;
            }
            Object.assign(this.props, nextProps);
        };
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this.apiClient = new APIClient();
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }
    setElement(element) {
        this._element = element;
    }
    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }
    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
    _componentDidMount() {
        this._render();
        this.componentDidMount();
    }
    componentDidMount() {
    }
    _componentDidUpdate() {
        this._render();
        this.componentDidUpdate();
    }
    componentDidUpdate() {
    }
    get element() {
        return this._element;
    }
    _render() {
        this._element.innerHTML = this.render();
    }
    render() {
        return 'Метод render не определён';
    }
    getContent() {
        return this.element;
    }
    _makePropsProxy(props) {
        props = new Proxy(props, {
            set: (target, prop, value) => {
                target[prop] = value;
                this.eventBus().emit(Block.EVENTS.FLOW_CDU);
                return true;
            },
            deleteProperty() {
                throw new Error('нет доступа');
            }
        });
        return props;
    }
    _createDocumentElement(tagName) {
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
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update"
};
