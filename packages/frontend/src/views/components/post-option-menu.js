import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledMenu = styled((props) => (<Menu
    elevation={0}
    anchorOrigin={{
        vertical: 'bottom', horizontal: 'right',
    }}
    transformOrigin={{
        vertical: 'top', horizontal: 'right',
    }}
    {...props}
/>))(({theme}) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18, color: theme.palette.text.secondary, marginRight: theme.spacing(1.5),
            }, '&:active': {
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity,),
            },
        },
    },
}));

export default function PostOptionMenu({anchorEl, isAdmin, handleClose, handleFullscreen, handleEdit, handleDelete}) {

    const open = Boolean(anchorEl);

    return (<StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
    >

        <MenuItem onClick={() => {
            handleClose();
            handleFullscreen()
        }} disableRipple>
            <FullscreenIcon/>
            Fullscreen
        </MenuItem>

        {isAdmin && <Divider sx={{my: 0.5}}/>}

        {isAdmin && <MenuItem onClick={() => {
            handleClose();
            handleEdit();
        }} disableRipple>
            <EditIcon/>
            Edit
        </MenuItem>}

        {isAdmin && <MenuItem onClick={() => {
            handleClose();
            handleDelete();
        }} disableRipple>
            <DeleteIcon/>
            DELETE
        </MenuItem>}


    </StyledMenu>);
}
