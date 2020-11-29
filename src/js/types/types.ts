import { IBlock } from '../modules/Block';

export type propsType = {
  [key: string]: any;
};

// eslint-disable-next-line no-unused-vars
export type extendedBlock = new (tagName?: string, props?: propsType) => IBlock;
