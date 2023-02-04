import {useLocation, useRoutes} from "react-router-dom";
import routes from "./config/routes";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {setFormReset} from "./actions/form-actions";
import {setAppStateDefault} from "./actions/app-state-action";

export default function App() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const location = useLocation();

    useEffect(() => {
        if (user) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
        }
    }, [user]);

    useEffect(() => {
        dispatch(setFormReset());
        dispatch(setAppStateDefault());
    }, [location]);

    return useRoutes(routes);

}
