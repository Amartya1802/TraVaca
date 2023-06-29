import React, {useEffect, useState} from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import {getPlacesData} from './api'
import Header from './Components/Header/Header';
import LeftSection from './Components/LeftSection/LeftSection';
import Map from './Components/Map/Map';
import Carousel from './Components/Carousel/Carousel';

const App = () => { 
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({ lat: latitude, lng: longitude})
        })
    }, []);

    useEffect(() => {
        // console.log(coordinates, bounds);
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                console.log(data);
                setPlaces(data);
            })
    }, [coordinates, bounds])
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <LeftSection />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
            <Carousel places={places}/>
        </>
    );
}

export default App;