import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const MyProvider = ({ children }) => {
    const [state, setState] = useState([]);
    const [wishList, setWishList] = useState([]);

    const updateState = (newState) => {
        const newDada = [...state, newState]
        setState(newDada)
        toast("Adding Your Product")
        console.log('sent,', state);
    };

    const totalSum = state.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
    const wishListSum = wishList.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
  
    const updateWishList = (wishlist) => {
        const newWishList = [...wishList, wishlist]
        setWishList(newWishList)
        toast("Adding Your Product")
    };

    const handleRemoveCard = (id) => {
        console.log('remove', id);
        const removeCard = state.filter(card => card.id !== id)
        setState(removeCard)
    }
    const handleRemoveWishList = (id) => {
        const removeWishlist = wishList.filter(w => w.id !== id)
        setWishList(removeWishlist)

    }

    return (

      <wishListTotalPrice.Provider value={wishListSum}>
          <TotalPrice.Provider value={totalSum}>
            <RemoveWishList.Provider value={handleRemoveWishList}>
                <RemoveCard.Provider value={handleRemoveCard}>
                    <showNavbarAddWishlist.Provider value={{ wishList }}>
                        <wishListAdd.Provider value={updateWishList}>
                            <showAddCard.Provider value={{ state, setState }}>
                                <AddCardData.Provider value={{ state }}>
                                    <MyContext.Provider value={updateState}>
                                        {children}
                                    </MyContext.Provider>
                                </AddCardData.Provider>
                            </showAddCard.Provider>
                        </wishListAdd.Provider>
                    </showNavbarAddWishlist.Provider>
                </RemoveCard.Provider>
            </RemoveWishList.Provider>
        </TotalPrice.Provider>
      </wishListTotalPrice.Provider>


    )
}


export const MyContext = createContext();
export const AddCardData = createContext()
export const showAddCard = createContext()
export const wishListAdd = createContext()
export const showNavbarAddWishlist = createContext()
export const RemoveCard = createContext()
export const RemoveWishList = createContext()
export const TotalPrice = createContext()
export const wishListTotalPrice = createContext()
