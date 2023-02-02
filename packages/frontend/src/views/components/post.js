import {
    Avatar,
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
import {red} from "@mui/material/colors";

export default function Post({post}) {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                        R
                    </Avatar>
                }

                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="400"
                image="https://res.cloudinary.com/dxrhrbot0/image/upload/v1657256016/sample.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
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
