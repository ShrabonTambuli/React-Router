import React from 'react';
import './Meal.css'
import { ArrowRightIcon, EyeIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Meal = ({ food }) => {
    const { Name, id, price, image, rating } = food;
    return (
        <div className=' mt-14'>
            <div className='bgm mx-auto'>
                <img className='mx-auto w-full p-3 rounded-3xl' src={image} alt="" />
                <h1 className='text-2xl font-serif font-semibold mt-2'>Name:{Name}</h1>
                <h3 className='text-lg font-serif font-semibold mt-2'>ID: {id}</h3>
                <h2 className='text-xl font-serif font-semibold mt-2'>Price: {price}</h2>
                <h4 className='text-lg font-serif font-semibold mt-2'>Rating: {rating}</h4>
                <div className='flex items-center justify-around mt-10'>
                    <Link to={`/foods/${id}`}>
                        <button className="py-2 px-4 bg-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 inline-flex items-center">
                            View Details<EyeIcon className="h-5 w-5 ms-2" />
                        </button>
                    </Link>
                    <button className="py-2 px-4 bg-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 inline-flex items-center">
                        Order Now<ArrowRightIcon className="h-5 w-5 ms-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Meal;