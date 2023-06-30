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

    const [childClicked, setChildClicked] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({ lat: latitude, lng: longitude})
        })
    }, []);

    useEffect(() => {
        setIsLoading(true);
        // console.log(coordinates, bounds);
        getPlacesData(type, bounds.sw, bounds.ne)
            .then((data) => {
                console.log(data);
                setPlaces(data);
                setIsLoading(false);
            })
    }, [type, coordinates, bounds])
    
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <LeftSection
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating} 
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
            <Carousel 
                places={places}
                childClicked={childClicked}
                isLoading={isLoading}
                type={type}
                setType={setType}
                rating={rating}
                setRating={setRating}
            />
        </>
    );
}

export default App;