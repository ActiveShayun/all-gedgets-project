import { useContext } from "react";
import { RemoveWishList } from "../../Ulitity/utylt";
import { MdAutoDelete } from "react-icons/md";
import React from 'react';

const CardWishList = ({ wList }) => {
    // console.log('wishlist', wList);
    const { id, image, category, price, description } = wList
    const handleRemoveWishList = useContext(RemoveWishList)
    return (
        <div className='flex gap-3  bg-white mb-3 rounded-lg'>
            <div>
                <img className='w-[300px] lg:w-[200px] h-[120px] object-cover rounded-lg' src={image} alt="" />
            </div>
            <div className='flex justify-between  items-start'>
                <div>
                    <h4 className='text-2xl font-semibold'>{category}</h4>
                    <p className='lg:text-lg font-normal text-gray-500'>{description}</p>
                    <p className='text-xl font-semibold'>$ {price}</p>
                </div>
                <div>
                    <button onClick={()=> handleRemoveWishList(id,wList)}
                        className='text-2xl  text-red-500'
                    ><MdAutoDelete /></button>
                </div>
            </div>

        </div>
    );
};

export default CardWishList;