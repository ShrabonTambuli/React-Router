import React from 'react';
import './Meal.css'

const Meal = ({ food }) => {
    const { Name, id, price, image, rating } = food;
    return (
        <div className=' mt-14'>
            <div className='bgm mx-auto'>
                <img className='mx-auto w-full p-3 rounded-3xl' src={image} alt="" />
                <h1>Name:{Name}</h1>
                <h3>ID: {id}</h3>
                <h2>Price: {price}</h2>
                <h4>Rating: {rating}</h4>
                <button className="py-2 px-4 bg-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Review Details
                </button>
                <button className="py-2 px-4 bg-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default Meal;