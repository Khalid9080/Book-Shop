

import React from 'react';
import bannerImg from '../../assets/7259813.jpg';


const Banner = () => {
    return (
       
            <div className="hero bg-base-200 min-h-screen rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <img
                        src={bannerImg}
                        className="max-w-2xl rounded-2xl shadow-2xl" />
                    <div className='space-y-10'>
                        <h1 className="text-7xl font-bold  playfair-display leading-none">Books to freshen up  your bookshelf</h1>
                        <button className="btn btn-lg bg-[#83b28c] work-sans rounded-2xl">Get Started</button>
                    </div>
                </div>
            </div>
        
    );
};

export default Banner;