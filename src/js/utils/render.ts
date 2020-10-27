import { IBlock } from "../modules/Block.js";

export default function render(query: string, block: IBlock) {
  const root = document.querySelector(query);

  if (root) {
    root.appendChild(block.getContent());
  }

  return root;
}
