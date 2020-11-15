export default '' +
    '{{#each chat_cards_data}}' +
    '  <div class="chat-card js-select-chat" data-chat-id="{{this.id}}">\n' +
    '    <img class="chat-card__avatar" src="{{#if this.avatar}}https://ya-praktikum.tech{{this.avatar}}{{else}}images/default_avatar.png{{/if}}">\n' +
    '    <div class="chat-card__user-info">\n' +
    '      <span class="chat-card__name">{{this.title}}</span>\n' +
    '      <span class="chat-card__last-message">{{this.preview}}</span>\n' +
    '    </div>\n' +
    '    <div class="chat-card__tech-info">\n' +
    '      <span class="chat-card__time">{{this.time}}</span>\n' +
    '      {{#if this.new_messages_number}}' +
    '        <span class="chat-card__new-messages-number">{{this.new_messages_number}}</span>' +
    '      {{/if}}' +
    '    </div>\n' +
    '  </div>' +
    '{{/each}}';
