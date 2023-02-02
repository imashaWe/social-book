import {Container, CssBaseline, Grid, Typography} from "@mui/material";
import surgeLogo from "../../assets/images/surge-logo.png";
import Copyright from "../common/copyright";

export default function AuthLayout({children}) {
    return (
        <Container component="main">
            <CssBaseline/>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{height: "90vh"}}
            >

                <Grid item xs={8}>
                    {children}
                </Grid>

                <Grid item xs={4}>
                    <img src={surgeLogo} width={100} alt="surge-logo"/>
                    <Typography variant='h3'>
                        Internship March 2023
                    </Typography>
                    <Typography variant='h4'>
                        Imasha Weerakoon
                    </Typography>
                </Grid>

            </Grid>

            <Copyright/>

        </Container>

    );
}
