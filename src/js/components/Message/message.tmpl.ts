export default '' +
'         <div class="messenger-app__chat-area-wrapper">\n' +
'          <div class="messenger-app__user-tab">\n' +
'            <div class="messenger-app__current-user-info">\n' +
'              <img src="{{#if avatar}}{{avatar}}{{else}}images/default_avatar.png{{/if}}" class="messenger-app__current-user-avatar">\n' +
'              <div class="messenger-app__current-user-name">{{title}}</div>\n' +
'            </div>\n' +
'            <div class="messenger-app__user-tab-menu-wrapper">\n' +
'              <button class="messenger-app__user-tab-button js-toggle-context" data-context="user-tab"><svg xmlns="http://www.w3.org/2000/svg" width="3" height="16" viewBox="0 0 3 16" fill="none">\n' +
'                <circle cx="1.5" cy="2" r="1.5" fill="#1BA5AB"/>\n' +
'                <circle cx="1.5" cy="8" r="1.5" fill="#1BA5AB"/>\n' +
'                <circle cx="1.5" cy="14" r="1.5" fill="#1BA5AB"/>\n' +
'              </svg></button>\n' +
'              <div class="messenger-app__current-user-menu context-menu js-context-user-tab hidden">\n' +
'                <ul class="context-menu__list">\n' +
'                  <li class="context-menu__item">\n' +
'                    <button class="context-menu__action">\n' +
'                      <div class="context-menu__icon">\n' +
'                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">\n' +
'                          <rect width="22" height="1.5" rx="0.75" transform="matrix(1 0 0 -1 0 19)" fill="#1BA5AB"/>\n' +
'                          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2328 1.02743C15.8002 0.459997 16.7202 0.459998 17.2877 1.02743L17.9726 1.71239C18.5401 2.27982 18.5401 3.19982 17.9726 3.76725V3.76725C17.4052 4.33469 16.4852 4.33469 15.9178 3.76725L15.2328 3.0823C14.6654 2.51486 14.6654 1.59487 15.2328 1.02743V1.02743ZM12.1503 4.10967C12.9069 3.35309 14.1335 3.35309 14.8901 4.10967V4.10967C15.6467 4.86625 15.6467 6.09291 14.8901 6.84949L7.30675 14.4329C6.94349 14.7961 6.45079 15.0002 5.93705 15.0002V15.0002C4.86725 15.0002 4 14.1326 4 13.0628V13.0628C4 12.5489 4.20414 12.0558 4.56752 11.6925L12.1503 4.10967Z" fill="#1BA5AB"/>\n' +
'                        </svg>\n' +
'                      </div>\n' +
'                      <div class="context-menu__name">Переименовать</div>\n' +
'                    </button>\n' +
'                  </li>\n' +
'                  <li class="context-menu__item">\n' +
'                    <button class="context-menu__action js-delete-chat" data-chat-id="{{id}}">\n' +
'                      <div class="context-menu__icon">\n' +
'                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">\n' +
'                          <circle cx="11" cy="11" r="10.25" stroke="#1BA5AB" stroke-width="1.5"/>\n' +
'                          <line x1="7.1109" y1="7.11103" x2="14.8891" y2="14.8892" stroke="#1BA5AB" stroke-width="1.5"/>\n' +
'                          <line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#1BA5AB" stroke-width="1.5"/>\n' +
'                        </svg>\n' +
'                      </div>\n' +
'                      <div class="context-menu__name">Удалить</div>\n' +
'                    </button>\n' +
'                  </li>\n' +
'                </ul>\n' +
'              </div>\n' +
'            </div>\n' +
'          </div>\n' +
'          <div class="messenger-app__chat-window">\n' +
            '{{#each messages_list}}' +
            '  <div class="message {{#if this.own}}message_right{{/if}}">\n' +
            '    <div class="message__body">{{{this.message_body}}}</div>\n' +
            '    <div class="message__time">{{this.message_time}}</div>\n' +
            '  </div>' +
            '{{/each}}' +
'          </div>\n' +
'          <div class="messenger-app__footer-tab">\n' +
'            <div class="messenger-app__attachment-wrapper">\n' +
'              <button class="messenger-app__attachment-button js-toggle-context" data-context="attachment"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">\n' +
'                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18661 12.5L13.7628 4.92389L14.7056 5.8667L7.12942 13.4428L6.18661 12.5Z" fill="#1BA5AB"/>\n' +
'                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70077 15.0142L16.2769 7.43805L17.2197 8.38086L9.64358 15.957L8.70077 15.0142Z" fill="#1BA5AB"/>\n' +
'                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0435 20.3565L21.6197 12.7803L22.5625 13.7231L14.9864 21.2993L14.0435 20.3565Z" fill="#1BA5AB"/>\n' +
'                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5572 22.8706L24.1334 15.2945L25.0762 16.2373L17.5 23.8134L16.5572 22.8706Z" fill="#1BA5AB"/>\n' +
'                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5574 22.8709C13.9423 25.486 9.71178 25.4954 7.10829 22.8919C4.50479 20.2884 4.51421 16.0579 7.12933 13.4428L6.18652 12.5C3.04838 15.6381 3.03708 20.7148 6.16127 23.839C9.28546 26.9632 14.3621 26.9518 17.5002 23.8137L16.5574 22.8709Z" fill="#1BA5AB"/>\n' +
'                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6195 12.7806L22.5623 13.7234C25.003 11.2826 25.0118 7.3341 22.5819 4.90417C20.152 2.47424 16.2035 2.48304 13.7627 4.92381L14.7055 5.86662C16.6233 3.94887 19.7257 3.94196 21.6349 5.85119C23.5441 7.76042 23.5372 10.8628 21.6195 12.7806Z" fill="#1BA5AB"/>\n' +
'                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70068 15.0146C6.95727 16.7581 6.95099 19.5784 8.68665 21.3141C10.4223 23.0497 13.2427 23.0435 14.9861 21.3L14.0433 20.3572C12.8229 21.5776 10.8486 21.582 9.63367 20.3671C8.41871 19.1521 8.4231 17.1778 9.64349 15.9575L8.70068 15.0146Z" fill="#1BA5AB"/>\n' +
'              </svg></button>\n' +
'              <div class="messenger-app__attachment-menu context-menu js-context-attachment hidden">\n' +
'                <ul class="context-menu__list">\n' +
'                  <li class="context-menu__item">\n' +
'                    <button class="context-menu__action">\n' +
'                      <div class="context-menu__icon">\n' +
'                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">\n' +
'                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61926 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52863 12 8.4892 12.1362 7.48056 12.4052L1.5 14V4C1.5 2.61926 2.61929 1.5 4 1.5ZM0 4C0 1.79083 1.79086 0 4 0H18C20.2091 0 22 1.79083 22 4V18C22 20.2092 20.2091 22 18 22H4C1.79086 22 0 20.2092 0 18V4ZM8 6C8 7.10455 7.10458 8 6 8C4.89542 8 4 7.10455 4 6C4 4.89545 4.89542 4 6 4C7.10458 4 8 4.89545 8 6Z" fill="#1BA5AB"/>\n' +
'                        </svg>\n' +
'                      </div>\n' +
'                      <div class="context-menu__name">Фото или Видео</div>\n' +
'                    </button>\n' +
'                  </li>\n' +
'                  <li class="context-menu__item">\n' +
'                    <button class="context-menu__action">\n' +
'                      <div class="context-menu__icon">\n' +
'                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">\n' +
'                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61926 20.5 4V12H16C13.7909 12 12 13.7908 12 16V20.5H4C2.61929 20.5 1.5 19.3807 1.5 18V4C1.5 2.61926 2.61929 1.5 4 1.5ZM12 22H4C1.79086 22 0 20.2092 0 18V4C0 1.79083 1.79086 0 4 0H18C20.2091 0 22 1.79083 22 4V12V18C22 20.2092 20.2091 22 18 22H12Z" fill="#1BA5AB"/>\n' +
'                        </svg>\n' +
'                      </div>\n' +
'                      <div class="context-menu__name">Файл</div>\n' +
'                    </button>\n' +
'                  </li>\n' +
'                  <li class="context-menu__item">\n' +
'                    <button class="context-menu__action">\n' +
'                      <div class="context-menu__icon">\n' +
'                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">\n' +
'                          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 11C20.5 16.2467 16.2467 20.5 11 20.5C5.7533 20.5 1.5 16.2467 1.5 11C1.5 5.7533 5.7533 1.5 11 1.5C16.2467 1.5 20.5 5.7533 20.5 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11 14C12.6569 14 14 12.6569 14 11C14 9.34314 12.6569 8 11 8C9.34314 8 8 9.34314 8 11C8 12.6569 9.34314 14 11 14Z" fill="#1BA5AB"/>\n' +
'                        </svg>\n' +
'                      </div>\n' +
'                      <div class="context-menu__name">Локация</div>\n' +
'                    </button>\n' +
'                  </li>\n' +
'                </ul>\n' +
'              </div>\n' +
'            </div>\n' +
'            <div class="messenger-app__insert-message-wrapper">\n' +
'              <input type="text" name="message" class="messenger-app__insert-message-input">\n' +
'            </div>\n' +
'            <button class="messenger-app__send-button"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">\n' +
'              <path d="M25.4614 11.2263L1.31916 0.0837208C0.934743 -0.0908465 0.476039 0.0131511 0.208617 0.343715C-0.0606619 0.674278 -0.0699474 1.14412 0.186332 1.48397L8.12543 12.0694L0.186332 22.6549C-0.0699474 22.9947 -0.0606619 23.4664 0.20676 23.7952C0.386899 24.0199 0.656178 24.1406 0.929172 24.1406C1.06103 24.1406 1.19288 24.1127 1.31731 24.0551L25.4596 12.9126C25.7901 12.7603 26 12.4316 26 12.0694C26 11.7073 25.7901 11.3786 25.4614 11.2263Z" fill="#1BA5AB"/>\n' +
'            </svg></button>\n' +
'          </div>\n' +
'        </div>\n'

