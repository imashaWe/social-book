import {LOGIN_PATH} from "./paths";
import Home from "../views/pages/home";
import PageNotFound from "../views/pages/page-not-found";
import AuthLayout from "../views/layouts/auth-layout";
import Login from "../views/pages/auth/login";

const routes = [
    {
        index: true,
        name: 'Home',
        element: <Home/>
    },
    {
        path: LOGIN_PATH,
        name: 'Login',
        element: <AuthLayout><Login/></AuthLayout>
    },
    {
        path: '*',
        name: '404',
        element: <PageNotFound/>
    }
];

export default routes;
