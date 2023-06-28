import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api';
// import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import { Typography, InputLabel, MenuItem, FormControl, Select, InputBase } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles'

const LeftSection = () => {

    const classes = useStyles();
    const [type, setType] = useState('Restaurants');
    const [rating, setRating] = useState('');

    return (
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

            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="type">Type</InputLabel>
                    <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="restaurants">Restaurants</MenuItem>
                        <MenuItem value="hotels">Hotels</MenuItem>
                        <MenuItem value="attractions">Attractions</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl className={classes.formControl2}>
                    <InputLabel id="rating">Rating</InputLabel>
                    <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="3">Above 3.0</MenuItem>
                        <MenuItem value="4">Above 4.0</MenuItem>
                        <MenuItem value="4.5">Above 4.5</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>

    );
}

export default LeftSection;
