import StartPages from "./StartPages.js";
import reg_page_data from "./reg_page_data.js";
import {props_type} from "../../types/Types.js";

export default class RegPage extends StartPages {
  constructor(props?: props_type) {
    props = props ? props : {};
    Object.assign(props, reg_page_data)

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

      this.apiClient.signup(fields_data)
        .then(() => {
          this.router.go('/chat')
        });
    })
  }
}
