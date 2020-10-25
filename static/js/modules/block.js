import EventBus from "./event-bus.js";
export default class Block {
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName = 'div', props = {}) {
        // @ts-ignore
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
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }
    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }
    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
    _componentDidMount(oldProps) {
        this._render();
        this.componentDidMount(oldProps);
    }
    // Может переопределять пользователь, необязательно трогать
    //TODO вернуться сюда и разобраться как использовать old new props
    // @ts-ignore
    componentDidMount(oldProps) {
    }
    _componentDidUpdate() {
        this._render();
        // @ts-ignore
        const response = this.componentDidUpdate();
    }
    // Может переопределять пользователь, необязательно трогать
    // @ts-ignore
    componentDidUpdate() {
    }
    get element() {
        return this._element;
    }
    _render() {
        const block = this.render();
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы возвращать из compile DOM-ноду
        // @ts-ignore
        this._element.innerHTML = block;
    }
    // Может переопределять пользователь, необязательно трогать
    render() {
    }
    getContent() {
        return this.element;
    }
    _makePropsProxy(props) {
        props = new Proxy(props, {
            set: (target, prop, value) => {
                // @ts-ignore
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
