import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { GoClockFill } from 'react-icons/go';
import { IoStar } from 'react-icons/io5';

const Hero = ({ data }) => {



    const { name, review, rating, about } = data;
    const star = [1, 2, 3, 4, 5];
    return (
        <div className='flex flex-col space-y-5 py-10 lg:py-0'>
            <p className='font-bold container'>Home / {name}</p>

            <div className='bg-[url("/restaurantDetailsHero.png")] w-full min-h-[550px] bg-no-repeat bg-cover bg-center relative'>
                <div class="container flex flex-col text-white justify-center h-[550px] z-20 relative text-lg">
                    <h2 className='text-5xl font-medium'>{name}</h2>

                    <section className="flex items-center mt-5">
                        {star.map(value => (
                            <section className={`${value <= rating ? 'bg-yellow-500' : 'bg-secondary'} text-white mr-2 p-1 rounded-sm`}>

                                < IoStar />
                            </section>
                        ))}
                        <p className="font-semibold">{data.rating.toString().length === 1 ? rating + '.0' : rating}</p>
                        <p className="text-secondary ml-1">({review})</p>
                    </section>

                    <p className='text-lg max-w-[530px] leading-6 mt-5'>{about}</p>

                    <div className='flex items-center  space-x-2 mt-8'>
                        <FaLocationDot />
                        <span>Singapour, Bishan-Ang Mo Kio Park </span>
                    </div>
                    <div className='flex items-center  space-x-2 mt-2'>
                        <GoClockFill />
                        <span> 08:00 - 22:00</span>
                    </div>


                </div>

                <div className='absolute top-0 left-0 custom-gradient w-full h-full z-10'></div>

                <img src="/restaurantLogo.png" className="absolute z-20 -bottom-16 left-1/2 -translate-x-1/2" />
            </div>
        </div>
    );
};

export default Hero;