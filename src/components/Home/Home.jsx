import React from 'react';
import SecondaryNavbar from './SecondaryNavbar';
import Hero from './Hero';
import LatestTrend from './LatestTrend';
import Feedback from './Feedback';
import RecentActivites from './RecentActivites';

const Home = () => {
    return (
        <>
            <SecondaryNavbar />
            <Hero />
            <LatestTrend />
            <Feedback />
            <RecentActivites />
        </>
    );
};

export default Home;