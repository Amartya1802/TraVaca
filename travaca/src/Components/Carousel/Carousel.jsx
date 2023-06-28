import React from 'react'
import {  CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { useRef, useState } from "react";

import DetailsCard from '../DetailsCard/DetailsCard'

const Carousel = () => {
    const classes = useState()
    const places = [
        {name: 'Cool place'},
        {name: 'Best steak'},
        {name: 'Good pizza'},
        {name: 'Cool place'},
        {name: 'Best steak'},
        {name: 'Good pizza'},
        {name: 'Cool place'},
        {name: 'Best steak'},
        {name: 'Good pizza'},
        {name: 'Cool place'},
        {name: 'Best steak'},
        {name: 'Good pizza'},
        {name: 'Best steak'},
        {name: 'Good pizza'},
        {name: 'Cool place'},
        {name: 'Best steak'},
        {name: 'Good pizza'},
        {name: 'Cool place'},
        {name: 'Best steak'},
        {name: 'Good pizza'},
        {name: 'Cool place'},
        {name: 'Best steak'},
        {name: 'Good pizza'},
    ]
    return (
        // <h1>Carousel</h1>
        <Grid container spacing={3} className={classes.list}>
            {
                places?.map((place, i) => (
                    <div item key={i} xs={12}>
                        <DetailsCard places={place}/>
                    </div> 
                ))
            }
        </Grid>
    );
}

export default Carousel;
