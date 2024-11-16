import { useContext, useState } from "react";
import ShowAddCard from "../ShowAddCard/ShowAddCard";
import { showAddCard, TotalPrice } from "../../Ulitity/utylt";
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import modalImg from '../../assets/Group.png'


const AddCard = () => {
    const { state, setState } = useContext(showAddCard)
    // react modal
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const totalPrice = useContext(TotalPrice)
    console.log('Price', totalPrice);
    console.log('addGadget', state);
    const [sortBy, setSortBy] = useState(true)

    const handleSortByCard = (sortAdd) => {
        setSortBy(sortAdd)
        if (setSortBy) {
            const sortCard = [...state].sort((b, a) => a.price - b.price)
            setState(sortCard)
        }
    }

    return (
        <div className="lg:p-4 mt-10 space-y-3">

            <div className="flex justify-between">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">card</h3>
                </div>
                <div className="space-x-3">
                    <span className="text-2xl font-bold ">Total cost: {totalPrice} $</span>
                    <span onClick={() => handleSortByCard(sortBy)}
                        className="text-lg font-semibold py-1 px-3 rounded-full border border-[#9538E2] cursor-pointer">Sort by Price</span>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()}
                        className='py-1 px-3 rounded-full bg-gradient-to-r from-[#9538E2] to-green-700 text-white'>Purchase</button>

                </div>
            </div>
            {
                state.map(gadget => <ShowAddCard gadget={gadget}></ShowAddCard>)
            }
            <div className="rounded-lg">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="bg-white p-4 rounded-lg text-center flex items-center flex-col w-[300px]">
                        <img className="w-[50px]" src={modalImg} alt="" />
                        <h3 className="font-bold text-2xl">Payment Successfully!</h3>
                        <p className="py-4 font-medium">Thanks for purchasing.</p>
                        <p className="font-medium">Total: {totalPrice} $</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="bg-gray-200 font-bold py-1 px-3 rounded-full w-[200px]">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )

};

export default AddCard;