import {Box, Grid, Typography, Link, Card, CardContent} from "@mui/material";
import {FormContainer, PasswordElement, PasswordRepeatElement, TextFieldElement} from "react-hook-form-mui";
import {FormMessageLabel, FormSubmitButton} from "../../common/form-components";
import {LOGIN_PATH} from "../../../config/paths";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {setUserRegister} from "../../../actions/user-action";
import {useEffect, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import logo from '../../../assets/images/logo.png';

export default function Register() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {state} = useLocation();
    const user = useSelector(state => state.user);
    const [captchaValue, setCaptchaValue] = useState(null);
    const handleSubmit = (data) => {
        dispatch(setUserRegister(data));
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
        <Card elevation={10} sx={{width: .8}}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <img src={logo} alt="logo" style={{width: 80, height: 80}}/>

                <Typography component="h1" variant="h5">
                    Create an Account
                </Typography>

                <FormContainer component="form" onSuccess={handleSubmit} sx={{mt: 1}}>

                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <TextFieldElement
                                required
                                fullWidth
                                label="First Name"
                                name="firstName"
                                margin="normal"
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextFieldElement
                                required
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                margin="normal"
                                autoFocus
                            />
                        </Grid>

                    </Grid>

                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <TextFieldElement
                                required
                                fullWidth
                                label="Username"
                                name="username"
                                margin="normal"

                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextFieldElement
                                required
                                fullWidth
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                            />
                        </Grid>

                    </Grid>

                    <PasswordElement
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        autoComplete="current-password"
                        margin="normal"
                    />

                    <PasswordRepeatElement
                        required
                        fullWidth
                        passwordFieldName="password"
                        name="confirmPassword"
                        label="Confirm Password"
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
                        REGISTER
                    </FormSubmitButton>

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href={LOGIN_PATH} variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>

                </FormContainer>
            </CardContent>
        </Card>
    );
}
