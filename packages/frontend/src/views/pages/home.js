import {Box, Fab, Paper, Stack} from "@mui/material";
import PostCard from "../components/post-card";
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useRef, useState} from "react";
import CreatePostDialog from "../components/create-post-dialog";
import PostSkeleton from "../components/post-skeleton";
import {useDispatch, useSelector} from "react-redux";
import {addPost, fetchPosts} from "../../actions/post-action";
import {toast} from "react-toastify";
import ErrorView from "../common/error-view";

export default function Home() {
    const [open, setOpen] = useState(false);
    const appState = useSelector(state => state.appState);
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const formState = useSelector(state => state.formState);
    const toastId = useRef(null);

    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }

    const handleSubmittingPost = (imageFile, description) => {
        dispatch(addPost(imageFile, description));
    }

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    useEffect(() => {
        if (formState.isSubmitting) {
            toastId.current = toast.loading("Posting...");
        }
        if (formState.isSuccess) {
            toast.update(toastId.current, {
                render: "Posted!",
                type: "success",
                isLoading: false,
                autoClose: 2000
            });
            setOpen(false);
        }
        if (formState.isFailure) {
            toast.update(toastId.current, {
                render: "Something went wrong",
                type: "error",
                isLoading: false,
                autoClose: 2000
            });
        }
    }, [formState]);

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
            <Fab variant="extended"
                 color="secondary"
                 aria-label="add"
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

function ListingView({appState, posts}) {
    const {isFetching, isFailure, isSuccess, message} = appState;
    if (isFetching) {
        return Array.from(new Array(10)).map((post, index) => <PostSkeleton key={index}/>);
    } else if (isFailure) {
        return <ErrorView message={message}/>
    } else if (isSuccess) {
        return posts.map((post, index) => <PostCard key={index} post={post}/>);
    }
}
