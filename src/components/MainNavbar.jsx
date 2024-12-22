import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { TbWorld } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';

const MainNavbar = () => {
    const [restaurant, setRestaurant] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();
    const handleSearch = () => {
        console.log(location, restaurant);

        if (location === 'singapour' && restaurant === 'restaurant') {
            navigate('/search-result');
        } else {
            alert('Select Option')
        }
    }
    const handleRestaurantSelect = (event) => {
        setRestaurant(event.target.value);
    };
    const handleLocationSelect = (event) => {
        setLocation(event.target.value);
    };
    return (
        <div className='flex justify-between items-center py-10 pb-20 lg:pb-10 container relative'>

            <Link to="/">
                <img src='/logo.png' className='w-36 xs:w-auto cursor-pointer' />
            </Link>


            <div className="flex space-x-5 items-center border border-gray-400 rounded-full py-2 pl-5 pr-2 absolute bottom-0 left-1/2 -translate-x-1/2 lg:static max-w-fit w-full lg:-translate-x-0 text-xs xs:text-sm sm:text-base">

                <select value={restaurant} onChange={handleRestaurantSelect} className="border-none focus:outline-none text-secondary" >
                    <option value="restaurant,hotel,service...">restaurant,hotel,service...</option>
                    <option value="restaurant">restaurant</option>
                </select>

                <span class="text-secondary">|</span>

                <select value={location} onChange={handleLocationSelect} className="border-none focus:outline-none text-secondary" >
                    <option value="Spain">Location</option>
                    <option value="singapour">Singapour...</option>
                </select>

                <button className="bg-primary p-2 rounded-full text-white" onClick={handleSearch}>
                    <IoIosSearch size={20} />
                </button>
            </div>

            <div className="flex items-center gap-x-2">
                <TbWorld className="text-[#595959] hidden sm:inline-block" size={30} />

                <button className="custom-button bg-[#1E1E1E] text-xs xs:text-sm md:text-base">
                    MyFeedback for business
                </button>
            </div>
        </div>
    );
};

export default MainNavbar;