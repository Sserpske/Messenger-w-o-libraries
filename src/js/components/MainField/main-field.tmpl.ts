export default '<div class="{{ this.wrapper_class }}">\n' +
  '  {{#each fields}}' +
  '    <div class="main-field {{ this.field_class }}">\n' +
  '      <input class="main-field__input" data-validation-type="{{validation_type}}" type="{{ this.type }}" name="{{ this.name }}" required>\n' +
  '      <label class="main-field__label">{{ this.label }}</label>\n' +
  '      <span class="main-field__error-message hidden">{{ this.error_message }}</span>\n' +
  '    </div>\n' +
  '  {{/each}}' +
  '</div>';
