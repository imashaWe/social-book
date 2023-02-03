import {Box, Button, Typography} from "@mui/material";
import page404 from "../../../assets/images/page-404.jpg";

export default function PageNotFound() {
    return (
        <Box
            sx={{
                mt: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img src={page404} alt="404" width={800}/>

            <Typography variant='h4'>Page Not Found</Typography>
            <Typography variant='body1'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</Typography>
            <Button variant="contained" color="primary" href="/">Home</Button>

        </Box>
    );
}
