import {props_type} from "../types/Types.js";

export default function getObjectById (array: props_type, id: Number) {
  return array.find((element: props_type) => element.id === id);
}
