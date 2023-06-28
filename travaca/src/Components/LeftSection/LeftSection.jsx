import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles'

const LeftSection = () => {

    const classes = useStyles();

    return (
        // <h1>Left-Section</h1>
        <>
            <Typography variant="h2" className={classes.main_txt}>
                TraVaca
            </Typography>
            <Typography variant="h6" className={classes.info_txt}>
                The All in One solution to all your vacation choices.<br />
                Search for hotels, resturaunts, point of attractions, and many more..
            </Typography>

{/* onLoad={onLoad} onPlaceChanged={onPlaceChanged} */}
            {/* <Autocomplete> */}
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                </div>
            {/* </Autocomplete> */}
        </>
        
    );
}

export default LeftSection;
