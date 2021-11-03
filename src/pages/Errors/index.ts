import Error404 from './Error404';
import { Route } from '../types';

const routes: Route[] = [{ path: '*', name: '404', component: Error404 }];

export default routes;
