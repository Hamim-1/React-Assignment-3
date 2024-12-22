import React from 'react';
import FooterCard from './FooterCard';
import SelectOption from './SelectOption';

const Footer = () => {
    const about = {
        heading: "About",
        items: ['About MyFeedback', 'Investor Relations'],
    }
    const MyFeedback = {
        heading: "MyFeedback",
        items: ['MyFeedback for business', 'Collections', 'Talk', 'Events', 'MyFeedback blog', 'Support', 'Developers'],
    }
    const Languages = {
        heading: "Languages",
        options: ['English', 'Bengali', 'French'],
    }
    const countries = {
        heading: "Countries",
        options: ['Singapour', 'Spain', 'Bangladesh'],
    }
    return (
        <>
            <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-3 border-t py-5 my-20 container'>
                <FooterCard data={about} />
                <FooterCard data={MyFeedback} />
                <div className='flex flex-col space-y-5 w-fit'>
                    <SelectOption data={Languages} />
                    <SelectOption data={countries} />
                </div>
            </div>
            <p className='text-sm font-bold text-center pb-8'>Copyright
                Septembre 2023 myfeedback, designed by scott</p>
        </>
    );
};

export default Footer;