import { Link } from "react-router-dom";

const Card = ({ gadget }) => {

    const { id, model, image ,price} = gadget

    return (
        <div>
            <div  className=" p-4 rounded-lg  bg-[#F7F7F7] shadow-xl ">
                <img className=" w-[200px] h-[150px]  object-cover rounded-lg mb-2" src={image} alt="" />
                <p className="text-xl font-normal mb-1">{model}</p>
                <p className="font-medium text-gray-600 mb-2">Price : {price} $</p>
                <Link to={`/gadget/${id}`}
                    className="text-base font-semibold rounded-full mt-2 py-1 px-2 border border-[#9538E2] text-[#9538E2]">View Details</Link>
            </div>
        </div>
    );
}
export default Card;