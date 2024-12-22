import React, { useEffect, useState } from 'react';
import { CgMenuMotion } from 'react-icons/cg';
import { GoSortDesc } from 'react-icons/go';
import { IoStar } from 'react-icons/io5';
import Filter from '../Filter';
import CustomerReviewCard from './CustomerReviewCard';

const CustomerRating = () => {
    const star = [1, 2, 3, 4, 5];
    const [sortBy, setSortBy] = useState(false);
    const [customerReviews, setCustomerRivews] = useState([]);
    const allRating = [
        { star: 5, rating: 100 },
        { star: 0, rating: 50 },
        { star: 0, rating: 30 },
        { star: 0, rating: 20 },
        { star: 0, rating: 10 },
    ];
    const filterOptions = [
        { text: 5, func: () => setSortBy(5) },
        { text: 4, func: () => setSortBy(4) },
        { text: 3, func: () => setSortBy(3) },
        { text: 2, func: () => setSortBy(2) },
        { text: 1, func: () => setSortBy(1) },
    ]
    const sortOptions = [
        { text: 'Default', func: () => setSortBy('default') },
        { text: 'Highest rated', func: () => setSortBy('high') },
        { text: 'Lowest rated', func: () => setSortBy('low') },
    ]
    const AllcustomerReviews = [
        { name: 'Wei Jie', location: "Singapore, Little india", rating: 5, date: "29/11/2023", about: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },

        { name: 'Mie Ling', location: "Singapore, Orchad boulevard", rating: 4, date: "09/05/2023", about: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },


        { name: 'Wei Xiong', location: "Singapore, Little india", rating: 3, date: "2/10/2023", about: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },

        { name: 'Ming Wei', location: "Singapore, Little india", rating: 5, date: "29/11/2023", about: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },

        { name: 'Xin Yi', location: "Singapore, Little india", rating: 4, date: "29/11/2023", about: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },

        { name: 'Wei Jie', location: "Singapore, Little india", rating: 5, date: "29/11/2023", about: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },

        { name: 'Wei Jie', location: "Singapore, Little india", rating: 5, date: "29/11/2023", about: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },


    ]
    useEffect(() => {

        if (typeof sortBy === 'number') {
            const filteredReviews = AllcustomerReviews.filter(review => review.rating === sortBy);
            setCustomerRivews(filteredReviews);
        } else if (sortBy === 'high') {
            const filteredReviews = AllcustomerReviews.sort((a, b) => b.rating - a.rating);
            setCustomerRivews(filteredReviews);
        } else if (sortBy === 'low') {
            const filteredReviews = AllcustomerReviews.sort((a, b) => a.rating - b.rating);
            setCustomerRivews(filteredReviews);
        } else if (sortBy === 'default') {
            setCustomerRivews(AllcustomerReviews)
        }
    }, [sortBy])
    useEffect(() => {
        setCustomerRivews(AllcustomerReviews);
    }, [])
    return (
        <div className='container'>
            <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 py-5 my-16 border-y border-[#DCDCDC]'>
                <div className='flex space-x-2'>
                    <img src="/star.png" className="h-fit" />
                    <div className='flex flex-col space-y-2'>
                        <h4 className='text-3xl font-bold'>Overall rating</h4>
                        <p class="text-sm text-[#5E5E5E]">834 Reviews</p>

                        <div className='flex space-x-2'>
                            {
                                star.map((s) => (
                                    <div className="bg-yellow-500 text-white p-0.5 rounded-sm" key={s}>

                                        < IoStar />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className='flex flex-col space-y-2'>
                    {
                        allRating.map((rating, i) => (
                            <div className='flex space-x-2 items-center' key={i}>
                                <p className='text-[#5E5E5E] text-nowrap'>{rating.star} Star</p>
                                <div className='w-full md:min-w-[450px] h-2 rounded-lg relative bg-[#D9D9D9]'>
                                    <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: `${rating.rating}%` }}>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className='flex space-x-5'>

                <Filter options={filterOptions} side="left-0" icon={<CgMenuMotion />} />
                <Filter options={sortOptions} side="left-0" icon={<GoSortDesc />} />

            </div>

            <div className='flex flex-col space-y-6 py-5'>
                {
                    customerReviews.map((value, i) => (
                        <CustomerReviewCard data={value} key={i} />
                    ))
                }
                <button class="custom-button bg-primary text-white w-fit mx-auto">Show more reviews</button>
            </div>


        </div>
    );
};

export default CustomerRating;