import React from 'react';
import AboutImage from './images/amazing-delicious-cheese-burger_727939-299.avif';

const About = () => {
    return (
        <div className='bg-black min-h-screen p-5 md:p-16' id='about'>
            <h1 className='text-center text-4xl md:text-7xl bg-black text-white font-semibold mb-8'>About Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='flex justify-center md:justify-end'>
                    <img src={AboutImage} alt="Delicious Cheese Burger" className='rounded-full w-full max-w-md' />
                </div>
                <div className='my-auto text-white p-4'>
                    <h1 className='text-3xl md:text-5xl'>What Makes Our Food Special?</h1>
                    <p className='pt-4 text-base md:text-xl'>
                        We believe that great food starts with great ingredients. That's why we carefully
                        source the freshest, highest-quality produce, meats, and seafood, often from
                        local farms and purveyors. Our commitment to quality shines through in every
                        dish we prepare.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
