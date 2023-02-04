import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ProfileAvatar from "../common/profile-avatar";
import nameToTitle from "../../helpers/name-to-title";
import Moment from "react-moment";
import {useDispatch, useSelector} from "react-redux";
import {likePost, unlikePost} from "../../actions/post-action";

export default function Post({post}) {
    const dispatch = useDispatch();
    const fullName = nameToTitle(`${post.postedBy.firstName} ${post.postedBy.lastName}`);
    const {uid} = useSelector(state => state.user);
    const isLiked = post.likes.findIndex(like => like._id === uid) !== -1;
    const likeCount = post.likes.length;
    const handleLike = () => {
        if (isLiked) {
            dispatch(unlikePost(post._id));
        } else {
            dispatch(likePost(post._id));
        }
    }

    return (
        <Card elevation={5}>
            <CardHeader
                avatar={
                    <ProfileAvatar user={post.postedBy}/>
                }

                title={fullName}
                subheader={<Moment fromNow>{post.postedAt}</Moment>}
            />
            <CardMedia
                component="img"
                height="400"
                image={post.imageURL}
                alt="Post Image"
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.description !== "undefined" ? post.description : "   "}
                </Typography>
            </CardContent>

            <CardActions>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <IconButton aria-label="add to favorites" onClick={handleLike}>
                            {isLiked ? <FavoriteIcon color="primary"/> : <FavoriteBorderIcon/>}
                            {likeCount > 0 &&
                                <Typography variant="body2" color="text.secondary">{likeCount}</Typography>}
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="share">
                            <ShareIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}
