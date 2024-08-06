import React from 'react';
import HeroImage from './images/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg';
import { ReactTyped } from 'react-typed';

const Home = () => {


    return (
        <div className='relative' id='home'>
            <div className='w-full'>
                <div className='relative'>
                    <img src={HeroImage} alt="" className='h-screen w-full object-cover' />
                    <div className='text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fcd34d] p-6 rounded-lg shadow-lg'>
                        <ReactTyped
                            strings={['Welcome to Fresh Food...', 'Enjoy the best food in town...', 'Fresh ingredients and delicious recipes...']}
                            typeSpeed={150}
                            backSpeed={70}
                            loop
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;
