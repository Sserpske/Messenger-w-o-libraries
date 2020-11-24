import render from '../utils/render.js';
import isEqual from '../utils/isEqual.js';
import {extendedBlock, props_type} from '../types/Types.js';

export interface IRoute {
  _pathname: string;
  _blockClass: extendedBlock;
  _block: any;
  _props: props_type;

  navigate(pathname: string): void;
  leave(): void;
  match(pathname: string): boolean;
  render(): void;
}

export default class Route implements IRoute {
  _pathname: string;
  _blockClass: extendedBlock;
  _block: any;
  _props: props_type;
  constructor(pathname: string, view: extendedBlock, props: props_type) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave(): void {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string): boolean {
    return isEqual(pathname, this._pathname);
  }

  render(): void {
    if (!this._block) {
      this._block = new this._blockClass();
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}
