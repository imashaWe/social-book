import {Box, Fab, Paper, Stack} from "@mui/material";
import Post from "../components/post";
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useState} from "react";
import CreatePostDialog from "../components/create-post-dialog";
import PostSkeleton from "../components/post-skeleton";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../actions/post-action";

export default function Home() {
    const [open, setOpen] = useState(false);
    const appState = useSelector(state => state.appState);
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }

    const handleSubmittingPost = (imageFile, description) => {

    }

    useEffect(() => {
        dispatch(fetchPosts());
    }, [0]);
    
    return (
        <Paper elevation={0} variant="outlined" square
               sx={{
                   pt: 4,
                   height: 'calc(87vh)',
                   overflow: 'auto',
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center'
               }}>
            <Box sx={{width: .8}}>
                <Stack spacing={3}>
                    <ListingView appState={appState} posts={posts}/>
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

function ListingView(appState, posts) {
    const {isFetching, isFailure, isSuccess} = appState;
    if (isFetching) {
        return Array.from(new Array(10)).map((post, index) => <PostSkeleton key={index}/>);
    } else if (isFailure) {
        return <div>Something went wrong</div>
    } else if (isSuccess) {
        return posts.map((post, index) => <Post key={index} post={post}/>);
    }
}
