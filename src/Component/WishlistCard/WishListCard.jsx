import React, { useContext } from 'react';
import { showNavbarAddWishlist, wishListTotalPrice } from '../../Ulitity/utylt';
import CardWishList from './CardWishList';



const WishListCard = () => {
    const { wishList } = useContext(showNavbarAddWishlist)
    console.log('wishList', wishList);
    const wishListSum = useContext(wishListTotalPrice)
    return (
        <div className='my-16 lg:p-4'>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Wishlist</h3>
                </div>
                <div>
                    <div className="space-x-3">
                        <span className="text-2xl font-bold">Total cost: {wishListSum} $</span>
                        <span className="text-lg font-semibold py-1 px-3 rounded-full border border-[#9538E2]">Sort by Price</span>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()}
                            className='py-1 px-3 rounded-full bg-gradient-to-r from-[#9538E2] to-green-700 text-white'>Purchase</button>
                    </div>
                    <div className="rounded-lg">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="bg-white p-4 rounded-lg text-center flex items-center flex-col w-[300px]">
                                <h3 className="font-bold text-2xl">Payment Successfully!</h3>
                                <p className="py-4 font-medium">Thanks for purchasing.    </p>
                                <p className="font-medium">Total: {wishListSum} $</p>
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
            </div>
            {
                wishList.map(wList => <CardWishList wList={wList}></CardWishList>)
            }

        </div>
    );
};

export default WishListCard;