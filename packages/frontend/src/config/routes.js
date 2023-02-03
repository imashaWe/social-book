import {EMAIL_NOT_VERIFY_PATH, LOGIN_PATH, REGISTER_PATH} from "./paths";
import Home from "../views/pages/home";
import PageNotFound from "../views/pages/errors/page-not-found";
import AuthLayout from "../views/layouts/auth-layout";
import Login from "../views/pages/auth/login";
import Register from "../views/pages/auth/register";
import MainLayout from "../views/layouts/main-layout";
import RequireAuth from "../views/common/require-auth";
import EmailNotVerified from "../views/pages/errors/email-not-verified";

const routes = [
    {
        index: true,
        name: 'Home',
        element: <RequireAuth><MainLayout><Home/></MainLayout></RequireAuth>
    },
    {
        path:EMAIL_NOT_VERIFY_PATH,
        name: 'Home',
        element: <RequireAuth><MainLayout><EmailNotVerified/></MainLayout></RequireAuth>
    },
    {
        path: 'auth',
        name: 'Auth',
        children: [
            {
                path: LOGIN_PATH,
                name: 'Login',
                element: <AuthLayout><Login/></AuthLayout>
            },
            {
                path: REGISTER_PATH,
                name: 'Register',
                element: <AuthLayout><Register/></AuthLayout>
            }
        ]
    },
    {
        path: '*',
        name: '404',
        element: <MainLayout><PageNotFound/></MainLayout>
    }
];

export default routes;
