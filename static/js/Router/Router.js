import Route from './Route.js';
import AuthStore from "../modules/AuthStore.js";
export default class Router {
    constructor(rootQuery) {
        if (Router.__instance) {
            return Router.__instance;
        }
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;
        this.auth = new AuthStore();
        Router.__instance = this;
    }
    use(pathname, block) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }
    start() {
        window.onpopstate = ((event) => {
            this._onRoute(event.currentTarget.location.pathname);
        }).bind(this);
        this._onRoute(window.location.pathname);
    }
    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        this.auth.checkAuth()
            .then(() => {
            if (['/auth', '/'].includes(pathname)) {
                this.go('/chat');
                return;
            }
            this.__onRoute(route);
        })
            .catch(() => {
            if (['/auth', '/'].includes(pathname)) {
                this.__onRoute(route);
                return;
            }
            this.go('/auth');
        });
    }
    __onRoute(route) {
        if (!route) {
            this.go('/404');
            return;
        }
        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render();
    }
    go(pathname) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }
    back() {
        this.history.back();
    }
    forward() {
        this.history.forward();
    }
    getRoute(pathname) {
        return this.routes.find(route => route.match(pathname));
    }
}
