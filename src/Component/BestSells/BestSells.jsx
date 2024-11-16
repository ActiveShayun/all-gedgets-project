import React from 'react';
import airpots from '../../assets/airpots.webp'
import watch from '../../assets/download.jpeg'
import mobile from '../../assets/smartphone.jpg'
import charger from '../../assets/portable charger.jpeg'
import sleep from '../../assets/sleep.webp'
import bottle from '../../assets/botle.webp'
import monitor from '../../assets/monitor.jpeg'
import leptop from '../../assets/Dell XPS 13.jpg'



const BestSells = () => {

    return (
        <div className="carousel w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <div className=' bg-gradient-to-br from-sky-600 to-yellow-500 grid  lg:grid-cols-2 justify-between items-center p-6 lg:px-20 gap-5 text-white'>
                    <div className='space-y-1'>
                        <h2 className='text-3xl font-bold'>BIGGEST
                            <span className='text-yellow-400'> SELLS </span>OF THE YEAR</h2>
                        <p className='text-yellow-400 font-medium'>Our Killer Product All Time</p>
                        <p>
                            Experience the latest tech with our sleek smartphone, featuring a crystal-clear display and high-resolution camera. Fast processing power and long battery life keep you connected all day. Capture stunning photos and videos with ease. Ideal for work, play, and everything in between.
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <img className='w-[200px] h-[140px] object-cover rounded-lg lg:relative bottom-8' src={bottle} alt="" />
                        <img className='w-[200px] h-[140px] object-cover lg:relative rounded-lg top-8' src={sleep} alt="" />
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='bg-gradient-to-tr from-blue-500 to-yellow-500 grid lg:grid-cols-2 justify-between items-center px-3 lg:px-20 gap-5'>
                    <div className='space-y-1'>
                        <h2 className='text-3xl font-bold'>BIGGEST
                            <span className='text-yellow-400'> SELLS </span>OF THE YEAR</h2>
                        <p className='text-yellow-400 font-medium'>Our Killer Product All Time</p>
                        <p>
                            Experience the latest tech with our sleek smartphone, featuring a crystal-clear display and high-resolution camera. Fast processing power and long battery life keep you connected all day. Capture stunning photos and videos with ease. Ideal for work, play, and everything in between.
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <img className='w-[200px] h-[140px] object-cover rounded-lg lg:relative bottom-8' src={watch} alt="" />
                        <img className='w-[200px] h-[140px] object-cover lg:relative rounded-lg top-8' src={airpots} alt="" />
                    </div>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='bg-gradient-to-br from-sky-600 to-yellow-500 grid lg:grid-cols-2 justify-between items-center px-3 lg:px-20 gap-5'>
                    <div className='space-y-1'>
                        <h2 className='text-3xl  font-bold'>BIGGEST
                            <span className='text-yellow-400'> SELLS </span>OF THE YEAR</h2>
                        <p className='text-yellow-400 font-medium'>Our Killer Product All Time</p>
                        <p>
                            Experience the latest tech with our sleek smartphone, featuring a crystal-clear display and high-resolution camera. Fast processing power and long battery life keep you connected all day. Capture stunning photos and videos with ease. Ideal for work, play, and everything in between.
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <img className='w-[200px] h-[140px] object-cover rounded-lg lg:relative bottom-8' src={leptop} alt="" />
                        <img className='w-[200px] h-[140px] object-cover lg:relative rounded-lg top-8' src={monitor} alt="" />
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='bg-gradient-to-br from-sky-600 to-yellow-500 grid lg:grid-cols-2 justify-between items-center px-3 lg:px-20 gap-5'>
                    <div className='space-y-1'>
                        <h2 className='text-3xl font-bold'>BIGGEST
                            <span className='text-yellow-400'> SELLS </span>OF THE YEAR</h2>
                        <p className='text-yellow-400 font-medium'>Our Killer Product All Time</p>
                        <p>
                            Experience the latest tech with our sleek smartphone, featuring a crystal-clear display and high-resolution camera. Fast processing power and long battery life keep you connected all day. Capture stunning photos and videos with ease. Ideal for work, play, and everything in between.
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <img className='w-[200px] h-[140px] object-cover rounded-lg lg:relative bottom-8' src={charger} alt="" />
                        <img className='w-[200px] h-[140px] object-cover lg:relative rounded-lg top-8' src={mobile} alt="" />
                    </div>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BestSells;