import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { IoIosCloseCircle } from 'react-icons/io';

const Menu = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`flex flex-col items-center gap-2 sm:gap-5 max-w-[1032px]  p-2 sm:p-5 bg-white relative ${isOpen ? 'scale-100' : 'scale-0'} duration-300 rounded-lg`}>
            <div>
                <img
                    src='/menu.png'
                    alt=""
                    className="w-full max-h-[490px] transition-opacity duration-300"
                />

            </div>
            <h2 className='text-3xl font-semibold'>Menu Bella Italia</h2>
            <a
                href='/menu.png' // Link to the image file
                download='/menu.png' // Sets the downloaded file name
                className="px-4 py-2 rounded-full text-[#1677BD] border border-[#1677BD] flex items-center font-medium space-x-2"
            >
                <FiDownload /> <span>Download this menu</span>
            </a>



            <IoIosCloseCircle className='absolute top-5 right-5 text-white text-3xl cursor-pointer' onClick={() => setIsOpen(false)} />
        </div>
    );
};

export default Menu;