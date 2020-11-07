import StartPages from "./StartPages.js";
import auth_page_data from "./auth_page_data.js";

export default class AuthPage extends StartPages {
  // @ts-ignore
  constructor(props?) {
    props = props ? props : {};
    Object.assign(props, auth_page_data)

    super(props);
  }

  bindEvents() {
    this.fields = this._element.querySelectorAll('input');

    const button = this._element.querySelector('.js-send-form');

    if (!button) {
      return;
    }

    button.addEventListener('click', (e) => {
      const fields_data: { [key: string]: string } = {};
      e.preventDefault();

      if (!this.validate.isFormValid(e)) {
        return;
      }

      this.fields.forEach((input: HTMLInputElement) => {
        fields_data[input.name] = input.value;
      })

      this.apiClient.signin(fields_data);
    })
  }
}

