import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='h-[350px] bg-[#ffff]  flex items-center justify-center'>
            <div className='flex flex-col gap-5 justify-center items-center'>
               <div className='flex gap-2 items-center justify-center'>
                <img src="https://i.ibb.co.com/GvL0WWTY/logo.png" />
                <p className='font-extrabold text-3xl'>Phudu</p>
               </div>
               <div className='text-[#0f0f0fdc] flex gap-10 '>
                <NavLink to="/" className={({isActive})=>(isActive ? "cursor-pointer pb-2 text-blue-600 border-b-3 border-b-blue-600" : "cursor-pointer")}>Home</NavLink>
                <NavLink to="/MyBooking" className={({isActive})=>(isActive ? "cursor-pointer pb-2 text-blue-600 border-b-3 border-b-blue-600" : "cursor-pointer")}>My-Booking</NavLink>
                <NavLink to="/Blogs" className={({isActive})=>(isActive ? "cursor-pointer pb-2 text-blue-600 border-b-3 border-b-blue-600" : "cursor-pointer")}>Blogs</NavLink>
                <NavLink to="/Contact" className={({isActive})=>(isActive ? "cursor-pointer pb-2 text-blue-600 border-b-3 border-b-blue-600" : "cursor-pointer")}>Contact Us</NavLink>
               </div>
               <hr className='w-[700px] mt-3' />
               <div className='flex gap-5 text-5xl mt-4'>
               <a target='_blank' href="https://www.facebook.com/asife.khan.9480"><i className="fa-brands fa-facebook text-blue-500"></i></a>
               <a target='_blank' href="https://x.com/"><i className="fa-brands fa-square-x-twitter "></i></a>
               <a target='_blank' href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin text-blue-800"></i></a>
               <a target='_blank' href="https://www.youtube.com/"><i className="fa-brands fa-youtube text-red-500"></i></a>
               </div>
            </div>
        </div>
    );
};

export default Footer;