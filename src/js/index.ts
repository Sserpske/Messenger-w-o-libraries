import RegPage from './pages/StartPages/RegPage';
import AuthPage from './pages/StartPages/AuthPage';
import Router from './Router/Router';
import NotFound from './pages/ErrorPages/NotFound';
import InternalServerError from './pages/ErrorPages/InternalServerError';
import ChatsPage from './pages/ChatsPage/ChatsPage';
import ProfilePage from './pages/Profile/Profile';
import EditProfile from './pages/EditProfile/EditProfile';
import 'normalize.css'
import '../sass/app.scss';

const router = new Router('.root');

router
  .use('/', RegPage)
  .use('/auth', AuthPage)
  .use('/404', NotFound)
  .use('/500', InternalServerError)
  .use('/chat', ChatsPage)
  .use('/profile', ProfilePage)
  .use('/edit', EditProfile)
  .start();
