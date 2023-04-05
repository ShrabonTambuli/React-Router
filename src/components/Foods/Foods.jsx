import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Foods = () => {
    const foods = useLoaderData();
    return (
        <div className='text-center mt-12'>
           <h1 className='inline-flex items-center font-serif font-semibold text-5xl'>Pizza List : {foods.length} Items<img className='w-32' src="../../../public/emoji-2740857_1920.png" alt="" /></h1> 
           <div className='grid grid-cols-3'>
                {
                    foods.map(food=><Meal key={food.id} food={food}></Meal>)
                }
           </div>
        </div>
    );
};

export default Foods;<h1>This is Food Page</h1>