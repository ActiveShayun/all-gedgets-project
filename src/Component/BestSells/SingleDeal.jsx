import React from 'react';

const SingleDeal = ({ hotDeal }) => {
    console.log('hotDeal', hotDeal);
    const { name, image, description, inStock, made, model, price, ratings } = hotDeal
    return (
        <div className='flex flex-col justify-between space-y-2 rounded-lg bg-white shadow-xl p-3 '>

            <div className=''>
                <img className='w-[200px] h-[150px] rounded-lg' src={image} alt="" />
                <h2 className='text-xl font-bold'>{name}</h2>
                <h3 className='text-lg font-bold'>{model}</h3>
                <p className='text-gray-500'>{description}</p>
                <p className='font-normal'>Made in {made}.</p>
                <p className={`${inStock ? 'text-green-900 font-bold mb-1' : 'text-orange-800 font-bold mb-1'}`}>{inStock ? 'Stoke in' : 'Stoke out'}.</p>
                <div className='flex justify-start'>
                    <div className="rating rating-sm relative right-2 rating-half">
                        <input type="radio" name="rating-10" className="rating-hidden" />
                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-red-700" />
                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-orange-800" />
                        <input
                            type="radio"
                            name="rating-10"
                            className="mask mask-star-2 mask-half-1 bg-orange-600"
                            defaultChecked />
                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-red-700" />
                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-orange-700" />
                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-orange-700" />
                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-red-700" />
                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-orange-700" />
                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                    </div>
                    {ratings}
                </div>
                <p>Price : {price} $.</p>

            </div>
            <div>
                <button className='py-1 px-3 rounded-full mt-2 font-semibold bg-gradient-to-tr from-sky-400 to-yellow-600'>Add to cart</button>
            </div>

        </div>
    );
};

export default SingleDeal;
