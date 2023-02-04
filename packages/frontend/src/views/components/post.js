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
import ShareIcon from '@mui/icons-material/Share';
import ProfileAvatar from "../common/profile-avatar";
import nameToTitle from "../../helpers/name-to-title";

export default function Post({post}) {
    const fullName = nameToTitle(`${post.postedBy.firstName} ${post.postedBy.lastName}`);
    return (
        <Card>
            <CardHeader
                avatar={
                    <ProfileAvatar user={post.postedBy}/>
                }

                title={fullName}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="400"
                image={post.imageURL}
                alt="Post Image"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon color="primary"/>
                            <Typography variant="body2" color="text.secondary">12</Typography>
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
