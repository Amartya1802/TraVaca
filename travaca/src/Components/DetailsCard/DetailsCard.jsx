import React from 'react'
import { Grid } from '@material-ui/core';
const DetailsCard = ({ places }) => {
    return (
        <h1>{places.name}</h1>
    );
}

export default DetailsCard;
