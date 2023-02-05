import {Grid, Stack, Typography} from "@mui/material";
import surgeLogo from "../../assets/images/surge-logo.png";
import IconButton from "@mui/material/IconButton";
import {Facebook, GitHub, LinkedIn} from "@mui/icons-material";
import authCover from "../../assets/images/auth-cover.png";

export default function AuthLayout({children}) {
    return (
        <Grid container>

            <Grid item
                  xs={8}
                  sx={{
                      backgroundImage: `url(${authCover})`,
                      backgroundSize: 'cover',
                      height: "100vh"
                  }}>

                <Grid container
                      justifyContent="center"
                      alignItems="center"
                      sx={{height: 1}}>

                    <Grid item xs={6}>
                        {children}
                    </Grid>

                </Grid>

            </Grid>

            <Grid item xs={4}>
                <Grid container
                      justifyContent="center"
                      alignItems="center"
                      sx={{height: 1}}>
                    <Grid item xs={5}>

                        <Stack justifyContent="center"
                               alignItems="center"
                               spacing={2}>

                            <img src={surgeLogo} height={117} alt="surge-logo"/>

                            <Typography variant='h5' align='center'>
                                Software Engineering Internship March 2023
                            </Typography>

                            <Typography>Imasha Weerakoon</Typography>

                            <Stack direction='row'>
                                <IconButton><Facebook/></IconButton>
                                <IconButton><LinkedIn/></IconButton>
                                <IconButton><GitHub/></IconButton>
                            </Stack>

                        </Stack>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}
