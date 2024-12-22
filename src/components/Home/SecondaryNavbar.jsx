import React from 'react';
import { CgHome } from 'react-icons/cg';
import { CiBeerMugFull, CiDumbbell } from 'react-icons/ci';
import { FaTheaterMasks } from 'react-icons/fa';
import { IoRestaurant } from 'react-icons/io5';
import { MdOutlineDirectionsCar } from 'react-icons/md';
import { PiBuilding, PiCoatHangerBold } from 'react-icons/pi';
import { RxGrid } from 'react-icons/rx';
import { TbWashGentle } from 'react-icons/tb';

const SecondaryNavbar = () => {
    const categories = [
        { icon: <RxGrid />, name: 'All' },
        { icon: <IoRestaurant />, name: 'Restaurants' },
        { icon: <PiBuilding />, name: 'Hotels' },
        { icon: <CgHome />, name: 'Home services' },
        { icon: <PiCoatHangerBold />, name: 'Shopping' },
        { icon: <MdOutlineDirectionsCar />, name: 'Car location' },
        { icon: <img src='/brush.png' />, name: 'Beauty & Spa' },
        { icon: <img src='/park.png' />, name: 'Park' },
        { icon: <FaTheaterMasks />, name: 'museum' },
        { icon: <TbWashGentle />, name: 'Car wash' },
        { icon: <CiBeerMugFull />, name: 'Bars' },
        { icon: <CiDumbbell />, name: 'Gyms' },
    ]
    return (
        <div className='grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-12 gap-y-5 container py-10 items-center'>
            {
                categories.map(category => (
                    <div className='text-secondary text-3xl flex flex-col items-center space-y-2 w-fit cursor-pointer mx-auto'>
                        {category.icon}
                        <p className='text-base text-nowrap'>{category.name}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default SecondaryNavbar;