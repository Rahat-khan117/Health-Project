import React from 'react';
import { NavLink } from 'react-router';

const Menu = () => {
    return (
        <div className='h-[300px] w-[200px] bg-blue-400 z-30 flex flex-col gap-9 pl-5 pt-5'>
            <NavLink to="/" className={({isActive})=>(isActive ? "cursor-pointer text-2xl text-white font-bold" : "cursor-pointer text-2xl  font-bold")}>Home</NavLink>
                <NavLink to="/MyBooking" className={({isActive})=>(isActive ? "cursor-pointer text-2xl text-white font-bold" : "cursor-pointer text-2xl  font-bold")}>My-Booking</NavLink>
                <NavLink to="/Blogs" className={({isActive})=>(isActive ? "cursor-pointer text-2xl text-white font-bold" : "cursor-pointer text-2xl  font-bold")}>Blogs</NavLink>
                <NavLink to="/Contact" className={({isActive})=>(isActive ? "cursor-pointer text-2xl text-white font-bold" : "cursor-pointer text-2xl  font-bold")}>Contact Us</NavLink>
        </div>
    );
};

export default Menu;