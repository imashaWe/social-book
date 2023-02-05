import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {Container, Divider, ListItemIcon, Stack} from "@mui/material";
import nameToTitle from "../../helpers/name-to-title";
import ProfileAvatar from "../common/profile-avatar";
import {useDispatch, useSelector} from "react-redux";
import {setUserLogout} from "../../actions/user-action";
import logo from '../../assets/images/logo.png'
import {Logout, Settings} from "@mui/icons-material";

export default function MainLayout({children, hideUserMenu = false}) {
    const user = useSelector(state => state.user);
    if (hideUserMenu) {
        return UnauthenticatedAppBar(children);
    } else {
        return user ? AuthenticatedAppBar(children, user) : UnauthenticatedAppBar(children);
    }
}

function AuthenticatedAppBar(children, user) {
    const dispatch = useDispatch();

    const fullName = nameToTitle(`${user.firstName} ${user.lastName}`);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(setUserLogout());
    }

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem>{fullName}</MenuItem>
            <Typography variant='body2' sx={{marginX: 2, marginY: 1}}>{user.email}</Typography>
            <Divider/>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <Settings fontSize="small"/>
                </ListItemIcon>
                My Account
            </MenuItem>
            <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                    <Logout fontSize="small"/>
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <img src={logo} height={50} alt='logo'/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{display: {xs: 'none', sm: 'block'}, mx: 2}}
                        >
                            {process.env.REACT_APP_NAME}
                        </Typography>
                        <Box sx={{flexGrow: 1}}/>
                        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                            <Stack
                                direction="column"
                                justifyContent="flex-end"
                                alignItems="flex-start"
                            >
                                <Typography variant='h6'>{fullName}</Typography>
                                <Typography variant='body1'>
                                    {user.username}
                                </Typography>
                            </Stack>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <ProfileAvatar user={user}/>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMenu}
            </Box>
            <Container component="main" maxWidth="md">
                {children}
            </Container>
        </>
    );
}

function UnauthenticatedAppBar(children) {
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <img src={logo} height={50} alt='logo'/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{display: {xs: 'none', sm: 'block'}, mx: 2}}
                        >
                            {process.env.REACT_APP_NAME}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container component="main" maxWidth="md">
                {children}
            </Container>
        </>
    );
}
