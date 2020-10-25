import ErrorPage from "../pages/ErrorPages/ErrorPage";

export default function render(query: string, block: ErrorPage) {
  const root = document.querySelector(query);

  if (root) {
    root.appendChild(block.getContent());
  }

  return root;
}
