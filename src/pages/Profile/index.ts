import Profile from './Profile';
import ProfileHistory from './ProfileHistory';

import { Route } from '../types';

const routes: Route[] = [
  { path: '/profile', component: Profile, name: 'Профиль' },
  { path: '/profile/history', component: ProfileHistory, name: 'История' },
]

export default routes;
