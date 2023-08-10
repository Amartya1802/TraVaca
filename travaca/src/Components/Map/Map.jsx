import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import Rating  from '@material-ui/lab/Rating';
import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width: 600px)');
    // const coordinates = {lat: 0, lng: 0}
    

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys = {{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter = {coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin = {[50, 50, 50, 50]}
                options = {''}
                onChange = {(e) => {
                    console.log(e);
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng});
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }} 
                onChildClick = {(child) => setChildClicked(child)}
            >
                
                {places?.map((places, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(places.latitude)}
                        lng={Number(places.longitude)}
                        ket={i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                        {places.name}
                                    </Typography>
                                    <img 
                                        className={classes.pointer}
                                        src={places.photo? places.photo.images.large.url : 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80'}
                                        alt={places.name}
                                    />
                                    <Rating size="small" value={Number(places.rating)} readOnly />
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;
