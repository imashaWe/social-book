import {Box, Grid, Typography, Link, Card, CardContent} from "@mui/material";
import {FormContainer, PasswordElement, TextFieldElement} from "react-hook-form-mui";
import {FormMessageLabel, FormSubmitButton} from "../../common/form-components";
import {REGISTER_PATH} from "../../../config/paths";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {setUserLogin} from "../../../actions/user-action";
import {useEffect, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import LockPersonIcon from '@mui/icons-material/LockPerson';
export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {state} = useLocation();
    const user = useSelector(state => state.user);
    const [captchaValue, setCaptchaValue] = useState(null);
    const handleSubmit = (data) => {
        dispatch(setUserLogin(data));
    }

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate(state?.redirect || '/', {replace: true});
            }, 1000);
        }
    }, [user]);

    const handleCapchaChange = (value) => {
        setCaptchaValue(value);
    }

    return (
        <Card elevation={10}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
               <LockPersonIcon sx={{fontSize:80}}/>

                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <FormContainer component="form" onSuccess={handleSubmit} sx={{mt: 1}}>

                    <TextFieldElement
                        required
                        fullWidth
                        id="email"
                        label="Username or Email Address"
                        name="usernameOrEmail"
                        autoComplete="email"
                        margin="normal"
                        autoFocus
                    />

                    <PasswordElement
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        autoComplete="current-password"
                        margin="normal"
                    />

                    <FormMessageLabel/>

                    <Box sx={{my: 1}}>
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                            onChange={handleCapchaChange}
                        />
                    </Box>

                    <FormSubmitButton
                        disabled={!captchaValue}
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        LOGIN
                    </FormSubmitButton>

                    <Grid container>
                        <Grid item xs>
                            <Link href='/' variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href={REGISTER_PATH} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>

                </FormContainer>
            </CardContent>
        </Card>
    );
}
