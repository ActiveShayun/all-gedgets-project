import { NavLink, useLoaderData, useParams } from "react-router-dom";

const Categories = ({categories, setSelectCategory }) => {
    console.log('setSelectCategory', setSelectCategory);
    const dataObj = useParams()
    const catBtn= useLoaderData()

    console.log('btn',categories);
    return (

        <div className="border  p-3 rounded-lg shadow-lg lg:h-[290px]">

        {/* <button onClick={() => setSelectCategory('all')}>All Products</button>   */}
              
            {   
            //  categories.map(category =>
            //      <button to={`category/${category.category}`}
            //          onClick={() => setSelectCategory(category.category)}
            //           className="block text-red-700">{category.category}</button>)
              
                        categories.map(category =>
                            <NavLink
                                className={({isActive}) => `bg-slate-200 text-xxl font-bold block mb-3   py-2 px-3 rounded-xl
                    ${isActive ? 'bg-gradient-to-tr from-blue-500 to-yellow-300' : ''}`}
                    to={`category/${category.category}`}>
                    {category.category}
                </NavLink>)
            }
        </div>
    );
};

export default Categories;