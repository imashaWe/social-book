import Home from "../views/pages/home";
import PageNotFound from "../views/pages/page-not-found";

const routes = [
    {
        index: true,
        name: 'Home',
        element: <Home/>
    },
    {
        path: '*',
        name: '404',
        element: <PageNotFound/>
    }
];

export default routes;
