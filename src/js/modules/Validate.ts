export default class Validate {
  private form: HTMLFormElement;
  private inputs: HTMLCollection;

  constructor(form: HTMLFormElement) {
    this.form = form;

    this.init();
  }

  init() {
    // @ts-ignore
    this.inputs = this.form.querySelectorAll('input');

    // @ts-ignore
    this.inputs.forEach((input: HTMLInputElement) => {
      input.addEventListener('blur', this.checkInput);
    })
  }

  isFormValid = () => {
    const valid_keys: boolean[] = [];

    // @ts-ignore
    this.inputs.forEach((input: HTMLInputElement) => {
      valid_keys.push(this.checkInput({}, input));
    })

    return valid_keys.every((item) => item);
  }

  checkInput = (e?: {}, input?: HTMLInputElement) => {
    // @ts-ignore
    input = input ? input : e.currentTarget;
    // @ts-ignore
    const type: string = input.dataset.validationType;
    // @ts-ignore
    const wrapper = input.parentNode;
    // @ts-ignore
    const error_message = wrapper.querySelector('.main-field__error-message');
    // @ts-ignore
    const regex = this.validateMap[type].regex;

    // @ts-ignore
    if (regex.test(input.value)) {
      // @ts-ignore
      error_message.classList.add('hidden');

      return true;
    } else {
      // @ts-ignore
      error_message.classList.remove('hidden');

      return false;
    }
  };

  validateMap = {
    email: {
      regex: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,}$/
    },
    password: {
      regex: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    },
    text: {
      regex: /^[a-zа-я][a-zа-я0-9\w\s]{2,}$/ui
    },
    phone: {
      regex: /^([+]+)*[0-9\x20\x28\x29\-]{5,20}$/
    }
  }
}
