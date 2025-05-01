import React from 'react';

const Hero = () => {
    return (
        <div className='md:mx-10 mx-5 p-1 bg-white rounded-3xl '>
            <div className="bg-gradient-to-b from-[#f7f4f4c7] to-white h-[500px] rounded-3xl flex items-center justify-center">
              <div className='flex flex-col gap-5 items-center px-5 lg:px-14 xl:px-24'>
                 <p className='lg:text-4x md:text-3xl text-[18px] sm:text-2xl font-bold text-center'>Dependable Care, Backed by Trusted <br /> Professionals.</p>
                 <p className='text-center md:text-sm text-[9px]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                 <div className='flex items-center gap-2'>
                    <input className='h-[40px] md:w-[400px] sm:w-[250px] w-[175px] bg-white border-1 border-[#00000063] pl-5 rounded-4xl' type="text" placeholder='search a doctor...' />
                    <button className='btn bg-[#176AE5] sm:text-[18px] text-[12px] rounded-2xl text-white'>Search Now</button>
                 </div>
                 <div className='flex gap-4'>
                    <img className='h-[200px] w-[300px] md:[275px] rounded-2xl lg:w-[300px]' src="https://i.ibb.co/KxW4Pvxn/d-1.jpg" />
                    <img className='h-[200px] w-[300px] rounded-2xl hidden md:block md:w-[275px] lg:w-[300px]' src="https://i.ibb.co/9k4h1wT7/d-2.jpg"/>
                 </div>
              </div>
            </div>
        </div>
    );
};

export default Hero;