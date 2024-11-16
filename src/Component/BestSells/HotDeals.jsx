import React from 'react';
import BestSells from './BestSells';
import { useLoaderData } from 'react-router-dom';
import SingleDeal from './SingleDeal';

const HotDeals = () => {
    const hotDeals = useLoaderData()
    console.log('hotDeals', hotDeals);
    return (
        <div>
            <BestSells />
            <h3 className='text-3xl font-semibold text-center mt-16 mb-1'>High-Tech Essentials – Elevate Your Lifestyle with the
                <span className='block lg:inline-block'>Perfect Gadget!</span></h3>
            <p className='text-center'>Discover ultimate convenience with this sleek, all-in-one gadget designed to simplify your life. Compact yet powerful, it integrates effortlessly with your devices, enhancing your routine whether you’re at work, traveling, or on the go. With smart connectivity, sustainable materials,
                <span className='block lg:inline-block'> and high performance, it’  s the  perfect blend of style and function for today’s modern lifestyle.</span>
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8'>
                {
                    hotDeals.map(hotDeal => <SingleDeal hotDeal={hotDeal}></SingleDeal>)
                }
            </div>

        </div>
    );
};

export default HotDeals;