import React from 'react'
import {  CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { useRef, useState } from "react";

import DetailsCard from '../DetailsCard/DetailsCard'

const Carousel = ({places}) => {
    const classes = useState()
    // const places = [
    //     {name: 'Cool place'},
    //     {name: 'Best steak'},
    //     {name: 'Good pizza'},
    //     {name: 'Cool place'},
    //     {name: 'Best steak'},
    //     {name: 'Good pizza'},
    //     {name: 'Cool place'},
    //     {name: 'Best steak'},
    //     {name: 'Good pizza'},
    //     {name: 'Cool place'},
    //     {name: 'Best steak'},
      
    // ]
    return (
        // <h1>Carousel</h1>
        <Grid container spacing={3} className={classes.list}>
            {
                places?.map((place, i) => (
                    <Grid item key={i} xs={4} container direction={'column'} spacing={1}>
                        <DetailsCard places={place}/>
                    </Grid> 
                ))
            }
        </Grid>
    );
}

export default Carousel;
