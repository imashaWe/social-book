import {Box, Grid, Typography, Link, Avatar} from "@mui/material";
import {FormContainer, PasswordElement, PasswordRepeatElement, TextFieldElement} from "react-hook-form-mui";
import {FormMessageLabel, FormSubmitButton} from "../../common/form-components";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {LOGIN_PATH} from "../../../config/paths";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {setUserRegister} from "../../../actions/user-action";
import {useEffect} from "react";

export default function Register() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {state} = useLocation();
    const user = useSelector(state => state.user);
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

    return (
        <Box
            sx={{
                width: .8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >

            <Avatar sx={{width: 80, height: 80}}>
                <PersonAddIcon fontSize='large'/>
            </Avatar>

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

                <TextFieldElement
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    margin="normal"

                />

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

                <FormSubmitButton
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

        </Box>
    );
}
