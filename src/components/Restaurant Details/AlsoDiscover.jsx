
import React from 'react';
import Card from './../Card';

const AlsoDiscover = () => {
    const restaurants = [
        { name: 'The melt', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant24.png', rating: 3.5, star: [1, 2, 3, 4, 5], review: '334' },
        { name: 'Lokma', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant25.png', rating: 4, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant26.png', rating: 4, star: [1, 2, 3, 4, 5], review: '876' },
    ]
    return (
        <div className='container flex flex-col space-y-8'>
            <h2>Also discover</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {
                    restaurants.map((restaurant, i) => (
                        <Card data={restaurant} key={i} />
                    ))
                }
            </div>
        </div>
    );
};

export default AlsoDiscover;