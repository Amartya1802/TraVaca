import React from 'react'
import { Grid } from '@material-ui/core';

import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles'
const DetailsCard = ({ places }) => {
    const classes = useStyles();
    return (
        // <h1>{places.name}</h1>
        
        <Card elevation={6}>
            <CardMedia
                style={{ height: 150 }}
                image={places.photo? places.photo.images.large.url : 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80'}
                title={places.name}
            />
            <CardContent>
                <Typography gutterBottom varient="h5">{places.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography varient="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{places.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography varient="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{places.ranking}</Typography>
                </Box>
                {places?.cuisine?.map(({name}) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
                {places.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon />{places.address}
                    </Typography>
                )}
                {places.phone && (
                    <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {places.phone}
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(places.web_url, '_blank')}>
                    Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(places.website, '_blank')}>
                    Website
                </Button>
            </CardActions>
            
        </Card>
    );
}

export default DetailsCard;
