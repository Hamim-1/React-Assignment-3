import React from 'react';
import { GoPerson } from 'react-icons/go';
import { IoStar } from 'react-icons/io5';

const CustomerReviewCard = ({ data }) => {
    const { rating, restaurantImages, name, location, date, about } = data;
    const star = [1, 2, 3, 4, 5];
    return (
        <div className='flex space-x-5  bg-[#F2F2F2] rounded-md p-5'>
            <div className='size-14'>
                <GoPerson className='bg-white rounded-full text-secondary p-2 text-5xl' />
            </div>
            <div className='flex flex-col space-y-1'>
                <p className='font-bold'>{name}</p>
                <p className='text-sm text-[#5E5E5E]'>{location}</p>


                <div className='flex'>
                    {star.map(value => (
                        <section className={`${value <= rating ? 'bg-yellow-500' : 'bg-secondary'} text-white mr-2 p-0.5 rounded-sm`}>
                            < IoStar />
                        </section>
                    ))}

                    <p className='text-sm'>{date}</p>
                </div>

                <p className='text-[#5E5E5E] max-w-[511px] pt-5'>
                    {about}
                </p>
            </div>

        </div>
    );
};

export default CustomerReviewCard;