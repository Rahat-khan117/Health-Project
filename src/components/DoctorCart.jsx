import React from 'react';
import { Link } from 'react-router';

const DoctorCart = ({doctor}) => {
    return (
        <div className='w-[270px] h-[450px] bg-white rounded-2xl'>
           <div className='flex flex-col'>
             <img className='w-[230px] h-[190px] m-5 rounded-xl' src={doctor.image} />
             <div className='flex gap-2 pl-4'>
                <button className='btn text-[12px] rounded-3xl h-[25px] text-[#09982F] bg-[#09982f1e]'>Available</button>
                <button className='btn text-[12px] rounded-3xl h-[25px] text-[#176AE5] bg-[#1769e526]'>{doctor.experience}</button>
             </div>
             <p className='font-semibold text-2xl pl-6 mt-3'>{doctor.name}</p>
             <p className='text-[#000000a6] pl-6 mt-2'>{doctor.education}</p>
           </div> 
           <div className='flex justify-center'>
           <hr className='border-t-1 border-dashed mt-3 w-[90%]'/>
           </div>
           <div>
             <div className='flex gap-1 items-center mt-3 pl-6'> 
             <i className="fa-solid fa-registered"></i>
             <p>Reg No:{doctor.reg}</p>
             </div>
             <Link to={`/details/${doctor.id}`}>
             <button className='btn text-[#176AE5] mt-3 ml-7 w-[213px] rounded-2xl border-1 border-[#176AE5] hover:bg-[#176AE5] hover:text-white'>View details</button>
             </Link>
           </div>
        </div>
    );
};

export default DoctorCart;