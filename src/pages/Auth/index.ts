import Login from './Login';
import Register from './Register';

import { Route } from '../types';

const routes: Route[] =  [
  { path: '/login', component: Login, name: 'Авторизация' },
  { path: '/register', component: Register, name: 'Регистрация' },
];

export default routes;
