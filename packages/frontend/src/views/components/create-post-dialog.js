import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from "@mui/material";
import ImageSelector from "./image-selector";

export default function CreatePostDialog({open, handleClose, handleSubmittingPost}) {
    let imageFile, description;
    const handlePost = () => {
        if (imageFile) {
            handleSubmittingPost(imageFile, description);
            handleClose();
        }
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true}>
            <DialogTitle>Create a new post</DialogTitle>
            <DialogContent>
                <ImageSelector handleImageChange={(image) => imageFile = image}/>
                <TextField
                    margin="dense"
                    label="Description"
                    multiline
                    rows={4}
                    fullWidth
                    onChange={(event) => description = event.target.value}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handlePost} variant='contained' color="secondary">POST</Button>
            </DialogActions>
        </Dialog>
    );
}
