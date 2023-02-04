import {Box, Typography} from "@mui/material";
import oops from "../../assets/images/oops.png";

export default function ErrorView({message}){
    return (
        <Box
            sx={{
                width: .8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <img src={oops} width={100}/>
            <Typography component="h1" variant="body1">
                {message || "Something went wrong"}
            </Typography>
        </Box>
    );
}
