import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';
import Categories from '../Categories/Categories';
import Home from '../Home/Home';

const GegetCard = () => {
    const allGadgets = useLoaderData()


    const { category } = useParams()
    console.log('data', allGadgets);


    const [gadgets, setGadgets] = useState([])

    console.log('gadgets', gadgets);

    const [selectCategory, setSelectCategory] = useState('all')
    const [filteredProducts, setFilteredProducts] = useState(allGadgets);


    // useEffect(() => {
    //     if (selectCategory === 'all') {
    //         setFilteredProducts(allGadgets)
    //     }
    //     else {
    //         setFilteredProducts(
    //             allGadgets.filter(product => product.category === selectCategory)
    //         )
    //     }
    // }, [selectCategory, allGadgets])
    // console.log('stf', filteredProducts);


    useEffect(() => {
       if(allGadgets?.length){
        if (category) {
            console.log('allGadgets',allGadgets);
            console.log('category',category);
            const filterGadgets = [...allGadgets].filter(Gadget => Gadget.category == category)
            console.log(filterGadgets);
            setGadgets(filterGadgets)
        }
        else {
            setGadgets(allGadgets)
        }
       }
    }, [allGadgets, category])

    return (
        <div className='flex'>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto mb-16'>
                {/* <Home setSelectCategory={selectCategory}></Home> */}
                {
                    gadgets.map(gadget => <Card
                        gadget={gadget}></Card>)
                }
            </div>
        </div>
    );
};

export default GegetCard;