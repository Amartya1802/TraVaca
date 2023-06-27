import React from 'react'
import { AppBar, Toolbar, Topography, InputBase, box, Typography } from '@material-ui/core';
import useStyles from './styles';
const Header = () => {
    const classes = useStyles();
    return (
        // <h1>Header</h1>
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>
                    TraVaca
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
