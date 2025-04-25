import React from 'react';
import { Link } from 'react-router';

const Contact = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-6 items-center mt-10'>
            <img className='h-[300px] w-[250px]' src="https://i.ibb.co/Kjy5YsG3/404-page-not-found-illustration-2048x1985-6voscfd3.png"/>
            <p className='text-red-500 text-3xl font-bold'>404 Page Not Found</p>
            <p className='text-xl font-bold'>
            <i className="fa-solid fa-triangle-exclamation"></i>
                This Page you are looking for does not exist.</p>
                <Link to="/">
            <button className="btn bg-[#176AE5] text-white rounded-xl ">Go Back Home</button>
            </Link> 
            </div>
            
        </div>
    );
};

export default Contact;