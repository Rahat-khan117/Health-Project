import React from 'react';
import { Link, NavLink } from 'react-router';

const NavBar = ({handleMenu}) => {
    return (
        <div className='bg-[#EFEFEF] h-[70px] z-auto'>
            <div className='container mx-auto px-4 md:px-7 flex items-center justify-between h-full'>
               <div className='flex gap-2 items-center justify-center'>
                <img src="https://i.ibb.co.com/GvL0WWTY/logo.png" />
                <p className='font-extrabold text-3xl'>Phudu</p>
               </div>
               <div className='text-[#0f0f0fdc] hidden md:flex md:gap-10'>
                <NavLink to="/" className={({isActive})=>(isActive ? "cursor-pointer pb-2 text-blue-600 border-b-3 border-b-blue-600" : "cursor-pointer")}>Home</NavLink>
                <NavLink to="/MyBooking" className={({isActive})=>(isActive ? "cursor-pointer pb-2 text-blue-600 border-b-3 border-b-blue-600" : "cursor-pointer")}>My-Booking</NavLink>
                <NavLink to="/Blogs" className={({isActive})=>(isActive ? "cursor-pointer pb-2 text-blue-600 border-b-3 border-b-blue-600" : "cursor-pointer")}>Blogs</NavLink>
                <NavLink to="/Contact" className={({isActive})=>(isActive ? "cursor-pointer pb-2 text-blue-600 border-b-3 border-b-blue-600" : "cursor-pointer")}>Contact Us</NavLink>
               </div>
               <div>
                <button className='btn bg-[#176AE5] text-white rounded-4xl hidden md:block'>Emergency</button>
               </div>
               {/* menu button for mobile */}
               <div role='button' className='md:hidden text-3xl'>
               <i onClick={handleMenu} className="fa-solid fa-bars text-blue-500"></i>
               </div>
            </div>
        </div>
        
    );
};

export default NavBar;