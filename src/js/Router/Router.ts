import Route, {IRoute} from './Route.js'
import AuthStore from "../modules/AuthStore.js";

export default class Router {
  private routes: IRoute[];
  private history: History;
  private _currentRoute: IRoute | null;
  private _rootQuery: string;
  private static __instance: Router;
  private auth: AuthStore;

  constructor(rootQuery: string) {
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

  use(pathname: string, block: any): this {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery});
    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = ((event: PopStateEvent): void => {
      this._onRoute((<Window>event.currentTarget).location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string): void {
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

  __onRoute(route: IRoute | undefined) {
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

  go(pathname: string) {
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
