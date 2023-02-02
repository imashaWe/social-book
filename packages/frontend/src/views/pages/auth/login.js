import {Box, Grid, Typography, Link} from "@mui/material";
import {FormContainer, PasswordElement, TextFieldElement} from "react-hook-form-mui";
import {FormMessageLabel, FormSubmitButton} from "../../common/form-components";
import Logo from "../../common/logo";
import {REGISTER_PATH} from "../../../config/paths";

export default function Login() {
    const handleSubmit = (data) => {

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
            <Logo/>

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
