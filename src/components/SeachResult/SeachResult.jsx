import React, { useEffect, useState } from 'react';
import { GoSortDesc } from 'react-icons/go';
import Filter from '../Filter';
import Card from '../Card';

const SeachResult = ({ place }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const Bestrestaurants = [
        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant17.png', rating: 4.5, review: '876' },


        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant18.png', rating: 3.5, review: '876' },

        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant19.png', rating: 5, review: '876' },

        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant20.png', rating: 3.2, review: '876' },

        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant21.png', rating: 3.5, review: '876' },

        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant22.png', rating: 4.5, review: '876' },

        { name: 'Bottega', about: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', img: '/restaurant23.png', rating: 4, review: '876' },


    ]
    useEffect(() => {
        setRestaurants(Bestrestaurants);
    }, [])

    useEffect(() => {
        if (sortBy === 'high') {
            const sortedRestaurants = [...Bestrestaurants].sort((a, b) => b.rating - a.rating);
            setRestaurants(sortedRestaurants);
        } else if (sortBy === 'low') {
            const sortedRestaurants = [...Bestrestaurants].sort((a, b) => a.rating - b.rating);
            setRestaurants(sortedRestaurants);
        } else if (sortBy === 'default') {
            setRestaurants(Bestrestaurants)
        }
    }, [sortBy])

    const sortOptions = [
        { text: 'Default', func: () => setSortBy('default') },
        { text: 'Highest rated', func: () => setSortBy('high') },
        { text: 'Lowest rated', func: () => setSortBy('low') },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 container py-20'>
            <div className='flex flex-col space-y-5'>
                <p className='font-bold'>Home / All restaurants</p>

                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl font-extrabold'>best restaurants in singapore</h2>


                    <Filter options={sortOptions} side="right-0" icon={<GoSortDesc />} />

                </div>
                {
                    restaurants.map((restaurant, i) => (
                        <Card data={restaurant} isRow={true} key={i} />

                    ))
                }
                <button className='custom-button bg-primary w-fit'>Show more</button>

            </div>

            <div>
                <img src="/map.png" className="rounded-md" />
            </div>
        </div>
    );
};

export default SeachResult;