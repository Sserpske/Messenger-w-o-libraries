import StartPages from './StartPages';
import reg_page_data from './reg_page_data';

export default class RegPage extends StartPages {
  constructor() {
    super(reg_page_data);
  }

  bindEvents() {
    this.fields = this._element.querySelectorAll('input');

    const button = this._element.querySelector('.js-send-form');

    if (!button) {
      return;
    }

    button.addEventListener('click', e => {
      const fields_data: { [key: string]: string } = {};
      e.preventDefault();

      if (!this.validate.isFormValid(e)) {
        return;
      }

      this.fields.forEach((input: HTMLInputElement) => {
        fields_data[input.name] = input.value;
      });

      this.apiClient.signup(fields_data).then(() => {
        this.router.go('/chat');
      });
    });
  }
}
