import {Paper} from "@mui/material";

export default function Home() {
    return (
        <Paper elevation={0} variant="outlined" square
               sx={{
                   height: 'calc(100vh - 64px)',
                   overflow: 'auto',
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center'
               }}>
            <h1>Home</h1>
        </Paper>
    );
}
