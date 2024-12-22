import React, { useState } from 'react';
import { IoStar } from 'react-icons/io5';

const Filter = ({ options, side, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isNumber = typeof (options[0].text) === 'number';
    const star = [1, 2, 3, 4, 5];
    return (
        <div className={`w-fit flex items-center  border border-[#5E5E5E] ${isOpen ? 'bg-[#5E5E5E] text-white' : 'text-[#5E5E5E] bg-transparent'} px-3 py-1 rounded-2xl font-medium relative cursor-pointer duration-300`} onClick={() => setIsOpen(!isOpen)}>
            {icon}
            <p>{isNumber ? 'Filter' : 'Sort'}</p>

            <div className={`absolute top-10 ${side} shadow-xl text-[#5D5D5D] bg-white ${isNumber ? 'w-fit' : 'w-[180px]'} rounded-md duration-300 origin-top border ${isOpen ? 'scale-100' : 'scale-0'}`}>

                {

                    isNumber
                        ?
                        <div className='flex flex-col space-y-2 py-3'>
                            <p className='px-5'>Filter By Rating</p>
                            {
                                options.map(option => (
                                    <div className='flex px-5 items-center hover:bg-slate-200' onClick={option.func}>
                                        <p className='text-xl font-medium text-yellow-500  mr-3'>{option.text}</p>
                                        {
                                            star.map(value => (
                                                <section className={`${value <= option.text ? 'bg-yellow-500' : 'bg-secondary'} text-white mr-2 p-0.5 rounded-sm h-fit`}>

                                                    < IoStar />
                                                </section>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        :

                        options.map((option, i) => (
                            <p className='hover:bg-slate-200 px-5 py-1' onClick={option.func} key={i}>{option.text}</p>

                        ))


                }
            </div>
        </div>
    );
};

export default Filter;