import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const fooder = useLoaderData();
    console.log(fooder);
    return (
        <div>
            <h1>Hello Word!!!</h1>
        </div>
    );
};

export default FoodDetails;<h1>Hello Word!!!</h1>