import React, {useState, useEffect, createRef} from 'react'
import {  CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import DetailsCard from '../DetailsCard/DetailsCard'

const Carousel = ({places, childClicked, isLoading}) => {
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
    // console.log(childClicked);
    console.log(childClicked);

    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());

        setElRefs(refs);

    }, [places]);


    return (
        
                <Grid container spacing={3} className={classes.list}>
                {isLoading ? (
                    <div className={classes.loading}>
                        <CircularProgress size="5rem" />
                    </div>
                ) : (
                    <>
                        {
                            places?.map((place, i) => (
                                <Grid item key={i} xs={4} container direction={'column'} spacing={1}>
                                    <DetailsCard 
                                        places={place}
                                        selected={Number(childClicked) === i}
                                        refProp={elRefs[i]}
                                    />
                                </Grid> 
                            ))
                        }
                        </>
                    )}
                </Grid>
                
        
    );
}

export default Carousel;
