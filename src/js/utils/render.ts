// @ts-ignore
export default function render(query: string, block) {
  const root = document.querySelector(query);

  if (root) {
    root.appendChild(block.getContent());
  }

  return root;
}
