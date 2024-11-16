import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = ({ setSelectCategory }) => {
    const categories = useLoaderData()
    console.log('categories', categories);
    return (
        <div className="">
            <Banner></Banner>
            <h3 className='text-3xl font-bold text-center  mt-44'>Explore Cutting-Edge Gadgets</h3>

            <div className="flex gap-3 mt-2">
                <Categories
                    categories={categories}>
                </Categories>

                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Home;