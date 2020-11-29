import { propsType } from '../types/types';

export default function getObjectById(array: propsType, id: Number) {
  return array.find((element: propsType) => element.id === id);
}
