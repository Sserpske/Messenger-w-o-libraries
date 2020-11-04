import StartPages from "./StartPages.js";
import reg_page_data from "./reg_page_data.js";

export default class RegPage extends StartPages {
  // @ts-ignore
  constructor(props?) {
    props = props ? props : {};
    Object.assign(props, reg_page_data)

    super(props);
  }
}
