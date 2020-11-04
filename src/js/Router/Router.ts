import Route from './Route.js'

export default class Router {
  //@ts-ignore
  private routes: any[];
  private history: History;
  private _currentRoute: any;
  private _rootQuery: any;
  private static __instance: Router;
  constructor(rootQuery: any) {
    //@ts-ignore
    if (Router.__instance) {
      //@ts-ignore
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: any, block: any) {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery});
    this.routes.push(route);

    return this;
  }

  start() {
    //@ts-ignore
    window.onpopstate = (event => {
      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      this.go('/404');

      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render(route, pathname);
  }

  //@ts-ignore
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

  getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }
}
