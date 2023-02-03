import {Box, Typography} from "@mui/material";
import check from "../../../assets/images/check.png";

export default function EmailNotVerified() {
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
            <img src={check} alt="email-send" width={300}/>

            <Typography variant='h4'>Verify Your Email Address</Typography>
            <Typography variant='body1'>Verification email sent. please check your inbox</Typography>

        </Box>
    );
}
