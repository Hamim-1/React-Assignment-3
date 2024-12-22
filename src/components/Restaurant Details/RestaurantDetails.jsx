import React from 'react';
import Hero from './Hero';
import Gallery from './Gallery';
import Information from './Information';
import { useLocation } from 'react-router-dom';
import CustomerRating from './CustomerRating';
import AlsoDiscover from './AlsoDiscover';
const RestaurantDetails = () => {
    const location = useLocation();
    const data = location.state?.data;
    return (
        <>
            <Hero data={data} />
            <Gallery />
            <Information />
            <CustomerRating />
            <AlsoDiscover />
        </>
    );
};

export default RestaurantDetails;