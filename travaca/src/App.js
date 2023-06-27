import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from './Components/Header/Header';
import LeftSection from './Components/LeftSection/LeftSection';
import Map from './Components/Map/Map';
import Carousel from './Components/Carousel/Carousel';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <LeftSection />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
            <Carousel />
        </>
    );
}

export default App;