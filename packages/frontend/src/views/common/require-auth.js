import {Navigate, useLocation} from "react-router-dom";
import {EMAIL_NOT_VERIFY_PATH, LOGIN_PATH} from "../../config/paths";
import {useSelector} from "react-redux";

export default function RequireAuth({children}) {
    const location = useLocation();
    const user = useSelector(state => state.user);
    if (!user) {
        return <Navigate to={LOGIN_PATH} replace={true} state={{redirect: location.pathname}}/>
    } else if (user && !user.isVerified) {
        return <Navigate to={EMAIL_NOT_VERIFY_PATH} replace={true}/>
    } else {
        return children;
    }
}
