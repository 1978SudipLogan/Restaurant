// import Home from './Home';
// import About from './About';
import Logo from './images/restaurant-logo.jpg'
import { Link } from 'react-scroll';
import { HiBars3 } from "react-icons/hi2";
import { HiMiniXCircle } from "react-icons/hi2";
import React, { useState } from 'react';
import '../App.css'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handler = () => {
        setNav(!nav)
    }
    return (
        <div className='w-full flex bg-gray-800 text-white fixed z-50'>
            <div className='w-16 h-16 m-2 mx-auto'>
                <img src={Logo} alt="" className='rounded-full hover:scale-105' />
            </div>

            <div className='md:hidden absolute top-4 right-4 ' onClick={handler}>
                {nav ? <HiMiniXCircle className='h-12 w-12' /> : <HiBars3 className='h-12 w-12' />}
            </div>


            <div className=' mx-auto mt-4 text-xl font-semibold pointer'>
                <ul className='md:flex hidden'>
                    <li className="p-4 hover:text-red-500">
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className="p-4 hover:text-red-500">
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li className="p-4 hover:text-red-500">
                        <Link to="menu" smooth={true} duration={500}>Menu</Link>
                    </li>

                    <li className="p-4 hover:text-red-500">
                        <Link to="review" smooth={true} duration={500}>Review</Link>
                    </li>
                    <li className="p-4 hover:text-red-500">
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>

                </ul>
            </div>

            <div className={`absolute md:hidden w-3/5 font-semibold  h-screen bg-red-500 ${nav ? 'left-0' : 'hidden'}`}>
                <ul className=' m-8  text-2xl pointer '>
                    <li className='p-2'><Link to="home" smooth={true} duration={500}>Home</Link></li><hr />
                    <li className='p-2'><Link to="about" smooth={true} duration={500}>About</Link></li><hr />
                    <li className='p-2'><Link to="menu" smooth={true} duration={500}>Menu</Link></li><hr />
                    <li className='p-2'><Link to="review" smooth={true} duration={500}>Review</Link></li><hr />
                    <li className='p-2'><Link to="contact" smooth={true} duration={500}>Contacts</Link></li><hr />
                </ul>
            </div>

        </div >
    )
}
export default Navbar;