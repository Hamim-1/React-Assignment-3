import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosCloseCircle } from 'react-icons/io';
const RestaurantImages = ({ isOpen, setIsOpen }) => {
    const [showImg, setImg] = useState('/gallery1.png');
    const [index, setInex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const allImg = [
        '/gallery1.png',
        '/gallery2.png',
        '/gallery3.png',
        '/gallery4.png',
        '/gallery5.png',
    ];

    const changeImage = (index) => {
        const newImg = allImg[index];
        if (newImg !== showImg) {
            setIsAnimating(true);
            setInex(index)
            setTimeout(() => {
                setImg(newImg);
                setIsAnimating(false);
            }, 300);
        }
    };
    const changeInex = (type) => {
        if (type === 'forward') {
            changeImage(index === allImg.length - 1 ? 0 : index + 1)
        } else {
            changeImage(index === 0 ? 4 : index - 1)
        }
    }

    return (

        <div className={`flex flex-col gap-2 sm:gap-5 max-w-[1032px]  p-2 sm:p-5 bg-white relative ${isOpen ? 'scale-100' : 'scale-0'} duration-300`}>
            <div className='bg-black relative'>
                <img
                    src={showImg}
                    alt=""
                    className={`w-full max-h-[490px] transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'
                        }`}
                />

                <div className='flex space-x-2 absolute bottom-7 left-1/2 -translate-x-1/2 items-center'>
                    <button
                        onClick={() => changeInex('backward')}
                        className={`mr-2 p-2 text-black bg-white/60 rounded-full shadow-md hover:bg-white z-10}`}
                    >
                        <FaArrowLeft />
                    </button>
                    {
                        allImg.map((img, i) => (
                            <button className={`size-3 rounded-full ${img === showImg ? 'bg-white' : 'bg-white/50'}`} key={i} onClick={() => changeImage(i)}>
                            </button>
                        ))
                    }

                    <button
                        onClick={() => changeInex('forward')}
                        className={`ml-2 p-2 text-black bg-white/60 rounded-full shadow-md hover:bg-white z-10}`}
                    >
                        <FaArrowRight />
                    </button>
                </div>

                <div className='bg-white text-black rounded-full px-3 py-1 absolute top-5 left-1/2 -translate-x-1/2 font-medium'>
                    {index + 1}/{allImg.length}
                </div>

            </div>

            <div className='grid grid-cols-5 gap-2 sm:gap-5'>
                {allImg.map((img, i) => (
                    <div key={i} onClick={() => changeImage(i)} className={`${i === index ? 'border-2 border-gray-600 rounded-lg p-0.5' : 'border-none'}`}>
                        <img src={img} alt="" className='h-full cursor-pointer rounded-lg' />
                    </div>
                ))}
            </div>

            <IoIosCloseCircle className='absolute top-5 right-5 text-white text-3xl cursor-pointer' onClick={() => setIsOpen(false)} />
        </div>



    );
};

export default RestaurantImages;
