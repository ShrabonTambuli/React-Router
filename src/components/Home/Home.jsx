import React from 'react';
import './Home.css'
import Lottie from "lottie-react";
import animation from "../../../public/Lottie.json";

const Home = () => {
    return (
        <div>
            <div className='text-center font-bold text-7xl mt-20'>
                <h1>Welcome To <span className='text-orange-700'>My Foods Site</span> !!!</h1>
                <p className='inline-flex mt-5'><img className='w-36 h-auto' src="../../../public/emoji-2740857_1920.png" alt="" /><img className='w-36 h-auto' src="../../../public/emoji-2740857_1920.png" alt="" /><img className='w-36 h-auto' src="../../../public/emoji-2740857_1920.png" alt="" /></p>
            </div>
            <div className='flex justify-around items-center  mt-16'>
                <div>
                    <h1 className='text-8xl font-semibold text-center border-2 p-6 rounded-r-3xl border-slate-950	bg-green-600				'><span className='text-orange-700'>OFFERS</span><br /> & <br /><span className='text-orange-700'>SPECIALS</span></h1>
                </div>
                <div className='border-4 border-indigo-200 border-y-indigo-500'>
                    <Lottie className='w-96 h-auto' loop={true} animationData={animation} />
                </div>
            </div>
            <div className='flex justify-around items-center mt-14 mx-14 gap-6'>
                <div className='p-6 my-9 w-3/5 border-4 border-indigo-500/75 rounded-2xl'>
                    <img className='w-full h-auto rounded-3xl' src="../../../public/photo-1513104890138-7c749659a591.avif" alt="" />
                </div>
                <div className='w-2/5 text-center bg-gray-500 py-40 border-4 border-indigo-500/75 rounded-2xl	'>
                    <h1 className='text-6xl font-semibold'>Tasty & Spicy</h1>
                    <button className="py-2 px-4 bg-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mt-20">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home; <h1>Home Page</h1>