export default '' +
'{{#each messages_data}}' +
'  <div class="message {{#if this.own}}message_right{{/if}}">\n' +
'    <div class="message__body">{{{this.message_body}}}</div>\n' +
'    <div class="message__time">{{this.message_time}}</div>\n' +
'  </div>' +
'{{/each}}'
