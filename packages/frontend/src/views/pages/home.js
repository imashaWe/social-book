import {Box, Fab, Paper, Stack} from "@mui/material";
import Post from "../components/post";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import CreatePostDialog from "../components/create-post-dialog";

const _SAMPLE_POST = {
    creator: {
        fistName: 'imasha',
        lastName: 'weerakoon'
    },
    image: 'https://placeimg.com/640/480/any',
    description: 'Sample Post'
}
export default function Home() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }

    const handleSubmittingPost = (imageFile, description) => {

    }

    const postListing = Array.from(new Array(10)).map((post, index) => <Post key={index} post={_SAMPLE_POST}/>);

    return (
        <Paper elevation={0} variant="outlined" square
               sx={{
                   height: 'calc(100vh - 64px)',
                   overflow: 'auto',
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center'
               }}>
            <Box sx={{width: .8}}>
                <Stack spacing={3}>
                    {postListing}
                </Stack>
            </Box>
            <Fab variant="extended" color="primary" aria-label="add"
                 sx={{
                     margin: 0,
                     top: 'auto',
                     right: 20,
                     bottom: 20,
                     left: 'auto',
                     position: 'fixed',
                 }}
                 onClick={handleOpen}>
                <AddIcon sx={{mr: 1}}/>
                Add Post
            </Fab>
            <CreatePostDialog handleClose={handleClose} handleSubmittingPost={handleSubmittingPost} open={open}/>
        </Paper>
    );
}
