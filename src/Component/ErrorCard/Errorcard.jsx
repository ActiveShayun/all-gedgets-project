import React from 'react';
import { useNavigate } from 'react-router-dom';

const Errorcard = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <div className='flex flex-col items-center justify-center h-[600px]'>
            <h2 className='text-3xl font-bold mb-4'>Page not found</h2>
            <button className='font-extrabold bg-slate-500  text-white p-3 rounded-xl' onClick={handleNavigate}>Back to hone</button>
        </div>
    );
};

export default Errorcard;