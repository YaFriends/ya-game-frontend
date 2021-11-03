import Dashboard from './Dashboard';

import { Route } from '../types';

const routes: Route[] = [{ path: '/', component: Dashboard, name: 'Главная', exact: true }];
export default routes;
