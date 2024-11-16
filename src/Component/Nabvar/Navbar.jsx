import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AddCardData, showNavbarAddWishlist } from '../../Ulitity/utylt';
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";


// const link = <>
//   <NavLink
//     className={({ isActive }) => `font-semibold ${isActive ? 'bg-green-700 text-white py-1 px-2 rounded-lg' : ''}`} to='/'>Home</NavLink>
//   <NavLink
//     className={({ isActive }) => `font-semibold ${isActive ? 'bg-green-700 text-white py-1 px-2 rounded-lg' : ''}`} to='/statistics'>Statistics</NavLink>
//   <NavLink
//     className={({ isActive }) => `font-semibold ${isActive ? 'bg-green-700 text-white py-1 px-2 rounded-lg' : ''}`} to='/dashboard'
//     style={{ color: location.pathname === '/dashboard' ? 'bg-red' : '' }}>Dashboard</NavLink>
//   <NavLink
//     className={({ isActive }) => `font-semibold ${isActive ? 'bg-green-700 text-white py-1 px-2 rounded-lg' : ''}`} to='/hotdeals'>Hotdeals</NavLink>
// </>

const Navbar = () => {
  const location = useLocation()
  const { state } = useContext(AddCardData)
  const { wishList } = useContext(showNavbarAddWishlist)
  console.log('sss'.state);
  return (
    
     <NavLink   className={`navbar bg-base-100 ${location.pathname === '/dashboard' ? 'bg-[#9538E2]' : ''}`}>
      {/* // <div className="navbar bg-base-100"> */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                
              {/* <NavLink
                className={({ isActive }) => `font-semibold ${isActive ? 'bg-green-700 text-white py-1 px-2 rounded-lg' : ''}`} to='/'>Home</NavLink> */}
            <NavLink
                 className={` ${location.pathname === '/dashboard' ? 'bg-green-900 text-white' : ''}`} to='/'>Home</NavLink> 
              <NavLink
                className={({ isActive }) => `font-semibold ${isActive ? 'bg-green-700 text-white py-1 px-2 rounded-lg' : ''}`} to='/statistics'>Statistics</NavLink>
              <NavLink

                className={({ isActive }) => `font-semibold ${isActive ? ' bg-green-700 text-white py-1 px-2 rounded-lg' : 'text-green-900'}`} to='/dashboard'
              >Dashboard</NavLink>
              <NavLink
                className={({ isActive }) => `font-semibold ${isActive ? 'bg-green-700 text-white py-1 px-2 rounded-lg' : ''}`} to='/hotdeals'>Hotdeals</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 font-normal">
            {/* <NavLink
              className={({ isActive }) => `font-semibold ${isActive ? 'bg-green-700 text-white py-1 px-2 rounded-lg' : ''}`} to='/'>Home</NavLink> */}
            <NavLink
                 className={({ isActive }) => `font-semibold ${isActive ? 'bg-green-700 text-white py-1 px-2 rounded-lg' : ''}}
                  ${location.pathname === '/dashboard' ? 'bg-green-700 text-white py-1 px-2' : 'text-black'}`} to='/'>Home</NavLink>
            <NavLink
              className={({ isActive }) => `font-semibold ${isActive ? 'bg-green-700 text-white py-1 px-2 rounded-lg' : ''}`} to='/statistics'>Statistics</NavLink>
            <NavLink
              className={({ isActive }) => `font-semibold ${isActive ? 'py-1 px-2 rounded-lg bg-green-700 text-white' : ''}`} to='/dashboard'
            
            >Dashboard</NavLink>
            <NavLink
              className={({ isActive }) => `font-semibold ${isActive ? 'bg-green-700 text-white py-1 px-2 rounded-lg' : ''}`} to='/hotdeals'
            >Hotdeals</NavLink>
          </ul>
        </div>
        <div className="navbar-end  ">
          <div className='border border-gray-300 flex items-center rounded-full p-1'>
            <FiShoppingCart className='text-lg block' />
            <span className='relative bottom-2 ml-1' >{state.length}</span>
          </div>
          <div className='flex border border-gray-300 rounded-full ml-3 p-1'>
            <CiHeart className='text-2xl' />
            <span className='relative bottom-2 ml-1'>{wishList.length}</span>
          </div>

        </div>
      </NavLink>
    
  );
};

export default Navbar;