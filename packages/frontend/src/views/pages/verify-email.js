import {Box, CircularProgress, Typography} from "@mui/material";
import {useParams} from "react-router-dom";

export default function VerifyEmail() {
    const {token} = useParams();

    return (
        <Box
            sx={{
                mt: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant={'h2'}>Verifying Your Email</Typography>
            <Typography variant={'body1'}>After verified, We'll redirect you to Home</Typography>
            <CircularProgress/>
        </Box>
    );
}
