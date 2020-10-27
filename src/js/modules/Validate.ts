export default class Validate {
  private form: HTMLElement;
  private inputs: NodeList;

  constructor(form: HTMLElement) {
    this.form = form;

    this.init();
  }

  init() {
    this.inputs = this.form.querySelectorAll('input');

    this.inputs.forEach((input: HTMLInputElement) => {
      input.addEventListener('blur', this.checkInput);
    })
  }

  isFormValid = (e: Event) => {
    const valid_keys: boolean[] = [];

    this.inputs.forEach((input: HTMLInputElement) => {
      valid_keys.push(this.checkInput(e, input));
    })

    return valid_keys.every((item) => item);
  }

  checkInput = (e: Event, input?: HTMLInputElement): boolean => {
    const inputElement: HTMLInputElement | EventTarget | null = input ? input : e.currentTarget;

    if (!(inputElement instanceof HTMLInputElement)) {
      return false;
    }

    const type: string = inputElement.dataset.validationType || 'text';
    const wrapper = inputElement.parentNode;
    const error_message: HTMLElement | null = wrapper ? wrapper.querySelector('.main-field__error-message') : null;
    const regex = this.validateMap[type];

    if (error_message) {
      if (regex.test(inputElement.value)) {
        error_message.classList.add('hidden');

        return true;
      } else {
        error_message.classList.remove('hidden');
      }
    }

    return false;
  };

  validateMap:{[key: string]: RegExp} = {
    email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,}$/,
    password: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    text: /^[a-zа-я][a-zа-я0-9\w\s]{2,}$/ui,
    phone: /^([+]+)*[0-9\x20\x28\x29\-]{5,20}$/
  }
}
