import React from 'react';
import { GoPerson } from 'react-icons/go';
import { IoStar } from 'react-icons/io5';

const CustomerReviewCard = ({ data }) => {
    const { rating, restaurantImages, name, location, date, about } = data;
    const star = [1, 2, 3, 4, 5];
    return (
        <div className='flex flex-col justify-between space-y-5 bg-[#F2F2F2] rounded-md p-3 h-[555px]'>
            <div className='fle flex-col space-y-5'>
                <div className='flex items-center space-x-3'>
                    <GoPerson className='bg-white rounded-full text-secondary p-2 text-5xl' />
                    <div className='flex flex-col'>
                        <p className='font-bold'>{name}</p>
                        <p className='text-sm text-[#5E5E5E]'>{location}</p>
                    </div>
                </div>

                <div className='flex'>
                    {star.map(value => (
                        <section className={`${value <= rating ? 'bg-yellow-500' : 'bg-secondary'} text-white mr-2 p-0.5 rounded-sm`}>
                            < IoStar />
                        </section>
                    ))}

                    <p className='text-sm'>{date}</p>
                </div>

                <p className='text-[#5E5E5E] whitespace-pre-line'>
                    {about}
                </p>
            </div>

            <div className='flex flex-col space-y-5'>
                <div className='grid grid-cols-3 gap-2 w-full'>
                    {restaurantImages.map((img, i) => (
                        <img src={img} key={i} className='rounded-md w-full' />
                    ))}
                </div>
                <button className='hover:underline font-medium w-fit'>Discover</button>
            </div>
        </div>
    );
};

export default CustomerReviewCard;