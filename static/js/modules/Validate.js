export default class Validate {
    constructor(form) {
        this.isFormValid = () => {
            const valid_keys = [];
            // @ts-ignore
            this.inputs.forEach((input) => {
                valid_keys.push(this.checkInput({}, input));
            });
            return valid_keys.every((item) => item);
        };
        this.checkInput = (e, input) => {
            // @ts-ignore
            input = input ? input : e.currentTarget;
            // @ts-ignore
            const type = input.dataset.validationType;
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
            }
            else {
                // @ts-ignore
                error_message.classList.remove('hidden');
                return false;
            }
        };
        this.validateMap = {
            email: {
                regex: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
            },
            password: {
                regex: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
            },
            text: {
                regex: /^[a-zA-Z][a-zA-Z0-9-_.]{2,20}$/
            },
            phone: {
                regex: /^([+]+)*[0-9\x20\x28\x29\-]{5,20}$/
            }
        };
        this.form = form;
        this.init();
    }
    init() {
        // @ts-ignore
        this.inputs = this.form.querySelectorAll('input');
        // @ts-ignore
        this.inputs.forEach((input) => {
            input.addEventListener('blur', this.checkInput);
        });
    }
}
