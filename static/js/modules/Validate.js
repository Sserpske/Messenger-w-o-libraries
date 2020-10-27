export default class Validate {
    constructor(form) {
        this.isFormValid = (e) => {
            const valid_keys = [];
            this.inputs.forEach((input) => {
                valid_keys.push(this.checkInput(e, input));
            });
            return valid_keys.every((item) => item);
        };
        this.checkInput = (e, input) => {
            const inputElement = input ? input : e.currentTarget;
            if (!(inputElement instanceof HTMLInputElement)) {
                return false;
            }
            const type = inputElement.dataset.validationType || 'text';
            const wrapper = inputElement.parentNode;
            const error_message = wrapper ? wrapper.querySelector('.main-field__error-message') : null;
            const regex = this.validateMap[type];
            if (error_message) {
                if (regex.test(inputElement.value)) {
                    error_message.classList.add('hidden');
                    return true;
                }
                else {
                    error_message.classList.remove('hidden');
                }
            }
            return false;
        };
        this.validateMap = {
            email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,}$/,
            password: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            text: /^[a-zа-я][a-zа-я0-9\w\s]{2,}$/ui,
            phone: /^([+]+)*[0-9\x20\x28\x29\-]{5,20}$/
        };
        this.form = form;
        this.init();
    }
    init() {
        this.inputs = this.form.querySelectorAll('input');
        this.inputs.forEach((input) => {
            input.addEventListener('blur', this.checkInput);
        });
    }
}
