import {Box, Grid, Typography, Link, Avatar} from "@mui/material";
import {FormContainer, PasswordElement, TextFieldElement} from "react-hook-form-mui";
import {FormMessageLabel, FormSubmitButton} from "../../common/form-components";
import {REGISTER_PATH} from "../../../config/paths";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {setUserLogin} from "../../../actions/user-action";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import {useEffect} from "react";
import {ReCAPTCHA} from "react-google-recaptcha";

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {state} = useLocation();
    const user = useSelector(state => state.user);
    const handleSubmit = (data) => {
        dispatch(setUserLogin({...data, firstName: "Imasha", lastName: "Kularathne"}));
    }

    useEffect(() => {
        if (user) {
            navigate(state?.redirect || '/', {replace: true});
        }
    }, [user]);

    const handleCapchaChange = (value) => {
        console.log("Captcha value:", value)
    }
    return (
        <Box
            sx={{
                width: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar  sx={{ width: 80, height: 80 }}>
                <LockPersonIcon fontSize='large'/>
            </Avatar>

            <Typography component="h1" variant="h5">
                Sign in
            </Typography>

            <FormContainer component="form" onSuccess={handleSubmit} sx={{mt: 1}}>

                <TextFieldElement
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
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

                <ReCAPTCHA
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    onChange={handleCapchaChange}
                />

                <FormSubmitButton
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
        </Box>
    );
}
