import {Box} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {useRef, useState} from "react";

export default function ImageSelector({handleImageChange}) {
    const inputRef = useRef();
    const [image, setImage] = useState(null);
    const onImageSelect = (event) => {
        if (event.target.files && event.target.files[0]) {
            handleImageChange(event.target.files[0]);
            setImage(event.target.files[0]);
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 300,
                border: '1px dotted #ccc',
                cursor: 'pointer'

            }}
            onClick={() => inputRef.current.click()}
        >
            <input ref={inputRef} type='file' style={{display: 'none'}} accept="image/*" onChange={onImageSelect}/>
            {
                image ?
                    <img src={URL.createObjectURL(image)}
                         alt='preview'
                         style={{maxWidth: '100%', maxHeight: '100%'}}/>
                    :
                    <AddPhotoAlternateIcon fontSize='large'/>
            }
        </Box>
    );
}
