const context_buttons = document.querySelectorAll('.js-toggle-context');

context_buttons.forEach((element) => {
  const menu_type = element.dataset.context;
  const context_menu = document.querySelector('.js-context-' + menu_type);

  element.addEventListener('click',() => {
    context_menu.classList.toggle('hidden');
  })
})
