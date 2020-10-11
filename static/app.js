const context_buttons = document.querySelectorAll('.js-toggle-context');
const form_button = document.querySelector('.js-send-form');

context_buttons.forEach((element) => {
  const menu_type = element.dataset.context;
  const context_menu = document.querySelector('.js-context-' + menu_type);

  element.addEventListener('click',() => {
    context_menu.classList.toggle('hidden');
  })
});

form_button.addEventListener('click', (e) => {
  const form = e.currentTarget.closest('form');
  const fields = form.querySelectorAll('.main-field__input');
  const fields_data = {};

  e.preventDefault();

  fields.forEach((input) => {
    fields_data[input.name] = input.value;
  })

  console.log(fields_data);
});
