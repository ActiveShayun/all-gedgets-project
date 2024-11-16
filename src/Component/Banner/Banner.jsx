import banner from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className=" bg-[#9538E2] h-[500px] flex flex-col  rounded-lg">
                <div className=" text-center mt-9">
                    <div className="">
                        <h1 className="text-5xl font-bold text-white ">Upgrade Your Tech Accessorize with <span className="block">Gadget Heaven Accessories</span></h1>
                        <p className="py-6 text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the
                            <span className="block">coolest accessories, we have it all!</span>
                        </p>
                        <button className="btn rounded-full font-bold">Shop Now</button>
                    </div>
                </div>
                 <div>
                <div className='md:w-1/2 h-[300px] mx-auto  absolute left-[25%]  -bottom-16'>
                    <img className='rounded-lg w-full h-full object-cover' src={banner} alt="" /></div>
            </div>
            </div>
           
        </div>
    );
};

export default Banner;