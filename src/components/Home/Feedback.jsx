import React from 'react';

const Feedback = () => {
    return (
        <div className='bg-[#F2F2F2] py-10 mb-10'>
            <div class="container flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
                <div className='flex flex-col space-y-7'>
                    <h3 className='text-[26px] font-bold'>MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h3>

                    <p className='text-secondary'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>

                    <button class="custom-button bg-[#1E1E1E]  w-fit">Explore MyFeedback business</button>

                </div>

                <div className=' w-full sm:w-4/5 mx-auto'>
                    <img src="/feedback.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Feedback;