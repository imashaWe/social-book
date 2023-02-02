import {Fragment} from "react";
import {Card, CardContent, CardHeader, Skeleton} from "@mui/material";

export default function PostSkeleton() {
    return (
        <Card >
            <CardHeader
                avatar={
                    <Skeleton animation="wave" variant="circular" width={40} height={40}/>
                }
                title={
                    <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{marginBottom: 6}}
                    />
                }
                subheader={
                    <Skeleton animation="wave" height={10} width="40%"/>
                }
            />
            <Skeleton sx={{height: 400}} animation="wave" variant="rectangular"/>
            <CardContent>
                <Fragment>
                    <Skeleton animation="wave" height={10} style={{marginBottom: 6}}/>
                    <Skeleton animation="wave" height={10} width="80%"/>
                </Fragment>
            </CardContent>
        </Card>
    );
}
