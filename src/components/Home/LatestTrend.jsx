import React, { useState } from 'react';
import Card from '../Card';

const LatestTrend = () => {
    let [restaurants, setRestaurants] = useState([
        { name: 'BottBella Italiaega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant5.png', rating: 5, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'Little Shucker', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant6.png', rating: 3, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'Marafuku Ramen', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant7.png', rating: 4, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant8.png', rating: 5, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'Arabia Nights', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant9.png', rating: 5, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'Lokma', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant10.png', rating: 3, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'The snug', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant11.png', rating: 4, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'Starbelly', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant12.png', rating: 5, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'Iori', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant13.png', rating: 5, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'Ngalley', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant14.png', rating: 3.1, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'diogonal', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant15.png', rating: 4, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'Kitoko', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant16.png', rating: 5, star: [1, 2, 3, 4, 5], review: '876' },

    ])
    const moreRestaurants = [
        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant1.png', rating: 5, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant2.png', rating: 3, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant3.png', rating: 4, star: [1, 2, 3, 4, 5], review: '876' },
        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant4.png', rating: 5, star: [1, 2, 3, 4, 5], review: '876' },
    ]
    const showMoreRestaurant = () => {
        if (restaurants.length === 12) {
            console.log(12);

            setRestaurants([...restaurants, ...moreRestaurants])
        } else {
            setRestaurants(restaurants.splice(0, 12));
        }
    }
    return (
        <div className='flex flex-col space-y-5 py-20 container'>
            <h2 className='text-3xl font-bold'>The lastest trends</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    restaurants.map((restaurant, i) => (
                        <Card data={restaurant} key={i} />
                    ))
                }
            </div>

            <div className='flex flex-col items-center mx-auto space-y-3'>

                <p className='text-xl font-medium'>Discover more cool restaurants</p>

                <button className='bg-primary hover:bg-primary/90 custom-button' onClick={showMoreRestaurant}>
                    {restaurants.length === 12 ? 'Show more' : 'Show less'}
                </button>
            </div>
        </div>
    );
};

export default LatestTrend;