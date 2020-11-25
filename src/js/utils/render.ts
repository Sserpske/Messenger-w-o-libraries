import {IBlock} from '../modules/Block';

export default function render(query: string, block: IBlock) {
  const root = document.querySelector(query);

  if (root) {
    root.appendChild(block.getContent());
  }

  return root;
}
