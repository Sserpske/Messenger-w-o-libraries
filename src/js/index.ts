import RegPage from './pages/StartPages/RegPage.js';
import AuthPage from "./pages/StartPages/AuthPage.js";
import Router from "./Router/Router.js";
import NotFound from "./pages/ErrorPages/NotFound.js";
import InternalServerError from "./pages/ErrorPages/InternalServerError.js";
import ChatsPage from "./pages/ChatsPage/ChatsPage.js";
import ProfilePage from "./pages/Profile/Profile.js";
import EditProfile from "./pages/EditProfile/EditProfile.js";

const router = new Router('.root');

router.use('/', RegPage)
  .use('/auth', AuthPage)
  .use('/404', NotFound)
  .use('/500', InternalServerError)
  .use('/chat', ChatsPage)
  .use('/profile', ProfilePage)
  .use('/edit', EditProfile)
  .start();
