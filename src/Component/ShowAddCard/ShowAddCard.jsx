import React, { useContext, useState } from 'react';
import { MdAutoDelete } from "react-icons/md";
import { RemoveCard } from '../../Ulitity/utylt';

const ShowAddCard = ({ gadget }) => {

    console.log('gadget', gadget);
    const { id, image, category, description, price } = gadget
    const handleRemoveCard = useContext(RemoveCard)
   
    
    return (
        <div className='flex mb-3 rounded-lg items-center'>
            <div className='flex gap-3 bg-white mb-3 rounded-lg'>
                <div>
                    <img className='w-[300px] lg:w-[200px] h-[120px] object-cover rounded-lg' src={image} alt="" />
                </div>
                <div className='flex'>
                    <div className='flex'> 
                        <div>
                            <h4 className='text-2xl font-semibold'>{category}</h4>
                            <p className='text-lg font-normal text-gray-500'>{description}</p>
                            <p className='text-xl font-semibold'>$ {price}</p>
                        </div>
                        <div>
                            <button onClick={() => handleRemoveCard(id)}
                                className='text-2xl  text-red-500'
                            ><MdAutoDelete /></button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default ShowAddCard;