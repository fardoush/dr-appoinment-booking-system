import React from 'react';
import { FaMedrt } from "react-icons/fa";
import { Link } from 'react-router';


const Navbar = () => {
  const links = <>
  <Link to='/' className='p-2 font-lg'>Home</Link>
  <Link to='/myBooking'  className='p-2 font-lg'>My-Bookings</Link>
  <Link to='/blog'  className='p-2 font-lg'>Blogs</Link>
  <Link to='/contact'  className='p-2 font-lg'>Contact Us</Link>
  </>
    return (
        <div className="navbar mx-auto px-8 py-3 border-b-1 border-b-blue-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-white text-black rounded-box z-1 mt-3 w-80 p-2 shadow">
        
        {links}
      </ul>
    </div>
    <a className="flex items-center gap-2 text-xl"> <FaMedrt className='text-blue-500'/>Phudu</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-blue-500 hover:bg-blue-400 rounded-full">Emergency</a>
  </div>
</div>
    );
};

export default Navbar;