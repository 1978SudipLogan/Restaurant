import React from 'react';
import MenuData from '../Data/MenuData';


const Menu = () => {
    return (
        <div className='p-2 pt-20 bg-[#64748b]' id='menu'>
            <h1 className='text-center text-4xl md:text-6xl font-semibold mb-6'>Our Menu</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {MenuData.map((item, index) => (
                    <Card key={index} path={item.path} title={item.title} price={item.price} />
                ))}
            </div>
        </div>
    );
};


const Card = ({ path, title, price }) => (
    <div className='bg-white p-4 rounded-lg shadow-lg'>
        <img src={path} alt={title} className='w-full h-48 object-cover rounded-t-lg' />
        <div className='p-4'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <p className='text-lg text-gray-600'>{price}</p>
        </div>
    </div>
);
export default Menu;