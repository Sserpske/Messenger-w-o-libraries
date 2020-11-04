import RegPage from './pages/StartPages/RegPage.js';
import AuthPage from "./pages/StartPages/AuthPage.js";
import Router from "./Router/Router.js";
import NotFound from "./pages/ErrorPages/NotFound.js";
import InternalServerError from "./pages/ErrorPages/InternalServerError.js";
import ChatsPage from "./pages/ChatsPage/ChatsPage.js";

const router = new Router('.root');

router.use('/', RegPage)
  .use('/auth', AuthPage)
  .use('/404', NotFound)
  .use('/500', InternalServerError)
  .use('/chat', ChatsPage)
  .start();
