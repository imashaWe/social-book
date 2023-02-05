import {Grid, Stack, Typography} from "@mui/material";
import surgeLogo from "../../assets/images/surge-logo.png";
import IconButton from "@mui/material/IconButton";
import {Facebook, GitHub, LinkedIn} from "@mui/icons-material";
import authBackground from '../../assets/images/authentication-cover.jpg'

export default function AuthLayout({children}) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            height={'100vh'}
        >
            <Grid item xs={8} sx={{
                pt: 10,
                backgroundImage: `url(${authBackground})`,
                backgroundSize: 'cover',
            }}>

                <Grid container justifyContent='center'>
                    <Grid item xs={8}>
                        {children}
                    </Grid>
                </Grid>

            </Grid>

            <Grid item xs={4} sx={{pt: 30}}>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="stretch">

                    <img src={surgeLogo} height={117} alt="surge-logo"/>

                    <Stack direction="column"
                           justifyContent="space-between"
                           alignItems="flex-start"
                           spacing={2}>
                        <Typography variant='h3'>
                            Internship
                        </Typography>
                        <Typography variant='h3'>
                            2023
                        </Typography>
                    </Stack>

                </Stack>

                <Typography variant='h6'>
                    Imasha Weerakoon
                </Typography>

                <Typography variant='small'>
                    imasha98.we@gmail.com
                </Typography>

                <Stack direction='row'>
                    <IconButton><Facebook/></IconButton>
                    <IconButton><LinkedIn/></IconButton>
                    <IconButton><GitHub/></IconButton>
                </Stack>

            </Grid>

        </Grid>

    );
}
