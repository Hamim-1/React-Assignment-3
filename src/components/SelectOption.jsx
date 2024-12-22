import React from 'react';

const SelectOption = ({ data }) => {
    const { heading, options } = data;
    return (
        <div className='flex flex-col'>
            <h2 className='text-xl font-extrabold'>{heading}</h2>
            <select className='border-none focus:outline-none text-sm text-[#5E5E5E]'>
                {
                    options.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default SelectOption;