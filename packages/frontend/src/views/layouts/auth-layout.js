import {Grid, Box} from "@mui/material";
import authCover from "../../assets/images/auth-cover.png";

export default function AuthLayout({children}) {
    return (
        <Box
            sx={{
                backgroundImage: `url(${authCover})`,
                backgroundSize: 'cover',
                height: "100vh"
            }}>

            <Grid container
                  justifyContent="center"
                  alignItems="center"
                  sx={{height: 1}}>

                <Grid item xs={4}>
                    {children}
                </Grid>

            </Grid>

        </Box>
    );
}
