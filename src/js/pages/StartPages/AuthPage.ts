import StartPages from "./StartPages.js";
import auth_page_data from "./auth_page_data.js";

export default class AuthPage extends StartPages {
  // @ts-ignore
  constructor(props?) {
    props = props ? props : {};
    Object.assign(props, auth_page_data)

    super(props);
  }
}

