import * as React from 'react';
import {createTheme} from '@mui/material/styles';
import {Link as RouterLink} from 'react-router-dom';

const LinkBehavior = React.forwardRef((props, ref) => {
    const {href, ...other} = props;
    // Map href (MUI) -> to (react-router)
    return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
});

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: process.env.REACT_APP_PRIMARY_COLOR,
        },
        secondary: {
            main: process.env.REACT_APP_SECONDARY_COLOR
        },
        background: {
            default: '#fff',
            paper: '#fff',
        },
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            },
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
    },
});
