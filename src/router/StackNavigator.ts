// eslint-disable-next-line no-unused-vars
import { RouterTypes } from './routerTypes';
import { GenerateUID } from '../utils/random';
// import all components here
import { Login, Dashboard } from '../ui/pages';

const PublicRoutes:RouterTypes = [{
    id: GenerateUID(),
    name: 'Login',
    component: Login,
    options: {
        headerShown: false,
    },
}];

const PrivateRoutes:RouterTypes = [{
    id: GenerateUID(),
    name: 'Dashboard',
    component: Dashboard,
    options: {
        headerShown: false,
    },
}];

const Routes = {
    public: PublicRoutes,
    private: PrivateRoutes,
};

export default Routes;
