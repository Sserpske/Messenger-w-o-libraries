import render from "../utils/render.js";
import isEqual from "../utils/isEqual.js";

export default class Route {
  private _pathname: any;
  private _blockClass: any;
  private _block: any;
  private _props: { rootQuery: any };
  constructor(pathname: any, view: any, props: { rootQuery: any; }) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: any) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: any) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}
