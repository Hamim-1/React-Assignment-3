import React from 'react';

const FooterCard = ({ data }) => {
    const { heading, items } = data;
    return (
        <div className='flex flex-col space-y-3'>
            <h2 className='text-xl font-extrabold'>{heading}</h2>
            {
                items.map((item, i) => (
                    <p className='text-sm text-[#5E5E5E] hover:underline cursor-pointer' key={i}>{item}</p>
                ))
            }
        </div>
    );
};

export default FooterCard;