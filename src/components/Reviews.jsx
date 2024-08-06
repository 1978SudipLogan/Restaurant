import React from 'react'
import reviews from '../Review/CustomerReview'



const Reviews = () => {
    return (
        <div className='p-4 pt-20 bg-[#475569]' id='review'>
            <h1 className='text-center text-4xl md:text-5xl font-semibold mb-8'>Customer Reviews</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {reviews.map((review, index) => (
                    <ReviewCard key={index} comment={review.comment} image={review.image} name={review.name} />
                ))}
            </div>
        </div>
    );
};

const ReviewCard = ({ name, image, comment }) => (
    <div className='bg-white p-4 rounded-2xl shadow-lg transform transition duration-500 hover:-translate-y-1 hover:shadow-2xl'>
        <div className='flex items-center mb-4'>
            <img src={image} alt={name} className='w-12 h-12 rounded-full mr-4 hover:scale-105' />
            <h2 className='text-2xl font-semibold'>{name}</h2>
        </div>
        <p className='text-gray-900'>{comment}</p>
    </div>
);

export default Reviews;