import {Box, CircularProgress, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserVerifyEmail} from "../../actions/user-action";

export default function VerifyEmail() {
    const {token} = useParams();
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserVerifyEmail(token));
    });

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/', {replace: true});
            }, 1000);
        }
    }, [user]);

    return (
        <Box
            sx={{
                mt: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant={'h2'}>Verifying Your Email</Typography>
            <Typography variant={'body1'}>After verified, We'll redirect you to Home</Typography>
            <CircularProgress/>
        </Box>
    );
}
