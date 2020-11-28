import { IBlock } from '../modules/Block';

export type props_type = {
  [key: string]: any;
};

export type extendedBlock = new (tagName?: string, props?: props_type) => IBlock;
