
import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
              <Helmet to='/dashboard'>dashboard</Helmet>
    return (
        
        <div className="bg-[#F7F7F7] ">
            <div className="rounded-lg space-y-3 bg-[#9538E2] text-center h-[300px] flex items-center flex-col justify-center">
                <div>
                    <h3 className="text-3xl font-bold text-white">Dashboard</h3>
                    <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to
                        <span className="lg:block">the coolest accessories, we have it all!</span></p>
                </div>

                <div className="flex gap-4">
                    <NavLink to='/dashboard/addcard'
                        className={({ isActive }) => `font-bold  py-1 px-3 rounded-full 
               ${isActive ? ' text-black bg-white ' : ' text-white border border-white'} `}
                    >Card</NavLink>

                    <NavLink to='/dashboard/wishlist'
                        className={({ isActive }) => `font-bold py-1 px-3 rounded-full
            ${isActive ? 'bg-white text-black' : 'text-white border border-white'}`}
                    >Wishlist</NavLink>
                </div>


            </div>
            <Outlet></Outlet>
        </div>



    );
};

export default Dashboard;