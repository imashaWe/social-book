import {useRoutes} from "react-router-dom";
import routes from "./config/routes";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";

export default function App() {
    const user = useSelector(state => state.user);

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    }, [user]);

    return useRoutes(routes);

}
