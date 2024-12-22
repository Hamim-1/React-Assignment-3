import React, { useEffect, useState } from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import RestaurantImages from './RestaurantImages';


const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='container py-24 flex flex-col space-y-3 relative'>
                <h2 className='text-3xl font-bold'>Discover our magnificent place in photos</h2>
                <p className='text-secondary'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>

                <div className='grid grid-cols-2  gap-2 md:gap-5'>
                    <div className='sm:relative'>
                        <img src="/gallery1.png" className='rounded-l-xl h-full' />

                        <button className='custom-button bg-white !text-black absolute bottom-8 sm:bottom-5 left-5 flex items-center space-x-3 font-medium border shadow-lg'>
                            <BsFillGrid3X3GapFill />

                            <span onClick={() => setIsOpen(true)}>View All photos</span>
                        </button>
                    </div>

                    <div className='grid grid-cols-2  gap-2 md:gap-5 xl:gap-x-0'>
                        <img src="/gallery2.png" />
                        <img src="/gallery3.png" />
                        <img src="/gallery4.png" />
                        <img src="/gallery5.png" />
                    </div>


                </div>
            </div>
            {
                isOpen &&
                <div className={`fixed top-0 left-0 bg-black/70 flex justify-center items-center h-screen z-20 w-full ${isOpen ? 'block' : 'hidden'}`}>
                    <RestaurantImages isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>


            }
        </>
    );
};

export default Gallery;