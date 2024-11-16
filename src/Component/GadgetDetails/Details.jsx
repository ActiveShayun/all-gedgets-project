import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MyContext, wishListAdd } from "../../Ulitity/utylt";
import { CiHeart } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcRating } from "react-icons/fc";


const Details = () => {
    const { id } = useParams()
    // console.log('params', id);
    const allGadgets = useLoaderData()
    // console.log('ag', allGadgets);

    const gadgetsId = parseInt(id)
    // console.log('gadgetsId', gadgetsId);


    const ecvData = useContext(MyContext)
    const updateWishList = useContext(wishListAdd)

    const gadgetsDetails = allGadgets.find(gadgets => gadgets.id === gadgetsId)
    console.log('book', gadgetsDetails);
    const { price, category, model, ram, processor, display, battery, connectivity, rating, description, image } = gadgetsDetails



    return (
        <div className="bg-[#F7F7F7]">
            <div className="bg-[#9538E2]  w-full h-[300px] text-white text-center pt-8">
                <h2 className="text-3xl font-semibold">Product Details</h2>
                <p>Explore the latest gadgets that will take your experience to <span className="block">the next level. From smart devices to the coolest accessories, we have it all!</span></p>
            </div>
            <div className="lg:w-3/5 mx-auto lg:flex  items-center gap-4 bg-white p-3 relative bottom-32  rounded-lg">
                <div>
                    <img className="lg:h-[300px] w-full object-cover rounded-lg mb-2" src={image} alt="" />
                </div>
                <div className="space-y-1">
                    {/* <h1 className="text-2xl font-medium">{category}</h1> */}
                    <p className="text-xl font-medium">{model}</p>
                    <button className="py-1 px-3 text-white rounded-full bg-gradient-to-tr from-blue-600 to-yellow-500">In stoke</button>
                    <p className="text-base font-medium">Price $ {price} </p>
                    <p className="text-lg font-normal text-gray-500">{description}</p>
                    <p className="text-xl font-medium">Specification:</p>
                    <p className="font-normal text-gray-500">1 . {ram}</p>
                    <p className="font-normal text-gray-500">2 . {processor}</p>
                    <p className="font-normal text-gray-500">3 . {display}</p>
                    <p className="font-normal text-gray-500">4 . {battery}</p>
                    <p className="font-normal text-gray-500">5 . {connectivity}</p>
                    <p className="font-normal text-gray-500 flex gap-3">6 .
                        <span className="flex items-center">
                            <FcRating />
                            <FcRating />
                            <FcRating />
                            <FcRating />
                            <FcRating />
                        </span>
                        {rating} Ratings</p>
                    <div className="flex items-center gap-5">
                        <button onClick={() => ecvData(gadgetsDetails, allGadgets)}
                            className="bg-[#9538E2] py-1 px-3 rounded-full text-white font-bold"
                        >add to cars</button>
                        <CiHeart
                            onClick={() => updateWishList(gadgetsDetails, allGadgets)}
                            className="text-2xl " />
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                />
            </div>
        </div>
    );
};

export default Details;