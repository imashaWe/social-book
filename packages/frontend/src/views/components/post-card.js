import {
    Card,
    CardActions,
    CardContent,
    CardMedia, Divider,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import nameToTitle from "../../helpers/name-to-title";
import Moment from "react-moment";
import {useDispatch, useSelector} from "react-redux";
import {likePost, unlikePost} from "../../actions/post-action";
import {useState} from "react";
import PostOptionMenu from "./post-option-menu";
import ImageViewer from "react-simple-image-viewer";

export default function PostCard({post, handleEdit, handleDelete}) {
    const dispatch = useDispatch();
    const fullName = nameToTitle(`${post.postedBy.firstName} ${post.postedBy.lastName}`);
    const {uid} = useSelector(state => state.user);
    const isLiked = post.likes.findIndex(like => like._id === uid) !== -1;
    const isAdmin = post.postedBy._id === uid;
    const likeCount = post.likes.length;

    const [anchorEl, setAnchorEl] = useState(null);
    const [viewImage, setViewImage] = useState(null);
    const handleOptionMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleOptionMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLike = () => {
        if (isLiked) {
            dispatch(unlikePost(post._id));
        } else {
            dispatch(likePost(post._id));
        }
    }

    return (
        <>
            <Card elevation={5}>
                {/*<CardHeader*/}
                {/*    avatar={*/}
                {/*        <ProfileAvatar user={post.postedBy}/>*/}
                {/*    }*/}

                {/*    title={fullName}*/}
                {/*    subheader={<Moment fromNow>{post.postedAt}</Moment>}*/}
                {/*    action={*/}
                {/*        <IconButton aria-label="settings" onClick={handleOptionMenuOpen}>*/}
                {/*            <MoreVertIcon/>*/}
                {/*        </IconButton>*/}
                {/*    }*/}
                {/*/>*/}
                <CardMedia
                    component="img"
                    height="400"
                    image={post.imageURL}
                    alt="PostCard Image"
                    sx={{cursor: "pointer"}}
                    onClick={() => setViewImage(post.imageURL)}
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post.description !== "undefined" ? post.description : "   "}
                    </Typography>
                </CardContent>

                <Divider/>

                <CardActions>
                    <Grid container justifyContent="space-between">

                        <Grid item>
                            <IconButton aria-label="add to favorites" onClick={handleLike}>
                                {isLiked ? <FavoriteIcon color="secondary"/> : <FavoriteBorderIcon/>}
                                {likeCount > 0 && <Typography variant="body1">{likeCount}</Typography>}
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <Typography variant='body1'>
                                {fullName}
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant='body1'>
                                <Moment fromNow>{post.postedAt}</Moment>
                            </Typography>

                        </Grid>

                    </Grid>
                </CardActions>
            </Card>
            <PostOptionMenu anchorEl={anchorEl} isAdmin={isAdmin} handleClose={handleOptionMenuClose}/>
            {viewImage
                &&
                <ImageViewer
                    src={[viewImage]}
                    handleClose={() => setViewImage(null)}
                    currentIndex={0}
                    onClose={() => setViewImage(null)}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                />
            }
        </>
    );
}
