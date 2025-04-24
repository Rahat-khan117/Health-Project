import React from 'react';

const Hero = () => {
    return (
        <div className='mx-10 p-1 bg-white rounded-3xl '>
            <div className="bg-gradient-to-b from-[#f7f4f4c7] to-white h-[500px] rounded-3xl flex items-center justify-center">
              <div className='flex flex-col gap-5 items-center'>
                 <p className='text-4xl font-bold text-center'>Dependable Care, Backed by Trusted <br /> Professionals.</p>
                 <p className='text-center text-sm'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                 <div className='flex items-center gap-3'>
                    <input className='h-[40px] w-[400px] bg-white border-1 border-[#00000063] pl-5 rounded-4xl' type="text" placeholder='search a doctor...' />
                    <button className='btn bg-[#176AE5] rounded-2xl text-white'>Search Now</button>
                 </div>
                 <div className='flex gap-4'>
                    <img className='h-[200px] w-[300px] rounded-2xl' src="https://i.ibb.co/KxW4Pvxn/d-1.jpg" />
                    <img className='h-[200px] w-[300px] rounded-2xl' src="https://i.ibb.co/9k4h1wT7/d-2.jpg" />
                 </div>
              </div>
            </div>
        </div>
    );
};

export default Hero;