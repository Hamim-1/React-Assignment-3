import React, { useState } from 'react';
import { FaFacebook, FaLocationDot, FaTiktok } from 'react-icons/fa6';
import { GoClockFill } from 'react-icons/go';
import { MdWeb, MdWifiCalling3 } from 'react-icons/md';
import { PiForkKnifeFill } from 'react-icons/pi';
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';
import Menu from './Menu';

const Information = () => {
    const [isOpen, setIsOpen] = useState(false);
    const informations = [
        { icon: <PiForkKnifeFill />, link: true, details: "See the menu", handleClick: () => setIsOpen(true) },
        { icon: <MdWifiCalling3 />, link: false, details: "+847 87 37 29 01" },
        { icon: <FaLocationDot />, link: false, details: "Singapour, Bishan" },
        { icon: <GoClockFill />, link: false, details: "08:00 - 22:00" },
        { icon: <MdWeb />, link: true, details: "www.bellaitalia.com" },
    ]
    const socialMediaIcon = [
        <FaFacebook />,
        <RiInstagramFill />,
        <FaTiktok />,
        <RiWhatsappFill />,
    ]
    return (
        <>
            <div className='container grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-0'>
                <div className='flex flex-col space-y-7'>
                    <h2 className='text-3xl font-semibold pb-3'>More information</h2>

                    {
                        informations.map((information, i) => (
                            <div className={`flex space-x-2 items-center text-2xl ${information.link && 'hover:underline cursor-pointer hover:text-[#1677BD]'}`}>
                                {information.icon}

                                <p className="text-lg " onClick={information.handleClick && information.handleClick}>
                                    {information.details}
                                </p>
                            </div>
                        ))
                    }

                    <div className='flex items-center space-x-5'>
                        {
                            socialMediaIcon.map((icon, i) => (
                                <div className='text-2xl'>
                                    {icon}
                                </div>
                            ))
                        }
                    </div>
                </div>

                <img src="/map2.png" className='w-full' />
            </div>

            {
                isOpen &&
                <div className={`fixed top-0 left-0 bg-black/70 flex justify-center items-center h-screen z-20 w-full ${isOpen ? 'block' : 'hidden'}`}>
                    <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>


            }
        </>
    );
};

export default Information;