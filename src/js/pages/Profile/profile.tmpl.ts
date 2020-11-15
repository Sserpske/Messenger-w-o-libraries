export default '' +
'<div class="profile">\n' +
'  <main class="profile__main">\n' +
'    <div class="profile__background"></div>\n' +
'    <div class="profile__shadow"></div>\n' +
'    <div class="profile__wrapper container">\n' +
'      <a class="profile__return-button" href="/chat">\n' +
'        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">\n' +
'          <rect x="15" y="8.50006" width="13.75" height="2" transform="rotate(-180 15 8.50006)" fill="white"/>\n' +
'          <path d="M6.25 13.75L1.25 7.5L6.25 1.25" stroke="white" stroke-width="1.6"/>\n' +
'        </svg>\n' +
'      </a>\n' +
'      <div class="profile__data-wrapper">\n' +
'        <img class="profile__avatar" src="{{#if profile.avatar}}https://ya-praktikum.tech{{profile.avatar}}{{else}}images/default_avatar.png{{/if}}">\n' +
'        <div class="profile__display-name">{{profile.first_name}}</div>\n' +
'        <div class="profile__data">\n' +
'          <div class="profile__data-line">\n' +
'            <div class="profile__line-title">Почта</div>\n' +
'            <div class="profile__line-value">{{profile.email}}</div>\n' +
'          </div>\n' +
'          <div class="profile__data-line">\n' +
'            <div class="profile__line-title">Логин</div>\n' +
'            <div class="profile__line-value">{{profile.login}}</div>\n' +
'          </div>\n' +
'        </div>\n' +
'        <div class="profile__actions">\n' +
'          <a class="profile__link profile__link_green" href="/edit">Изменить данные</a>\n' +
'          <button class="profile__link profile__link_red js-button-logout">Выйти</button>\n' +
'        </div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </main>\n' +
'</div>'
