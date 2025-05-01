import React, { useEffect, useState } from 'react';
import DoctorCart from './DoctorCart';



const DoctorContainer = () => {

//  This is for data load
  const [doctors, setDoctor] = useState([])
  const [showAll, setShowAll] = useState(false)
   
   useEffect(()=> {
     fetch("Doctor.json")
     .then(res => res.json())
     .then(data => {
        showAll ? setDoctor(data) : setDoctor(data.slice(0,6));
     })
   },[showAll])

    return (
        <div className='container mx-auto mt-14 flex flex-col items-center gap-4 px-4'>
          <p className='text-4xl font-bold text-center'>Our Best Doctors</p>
          <p className='text-center text-sm'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
          <div className='cart_container grid grid-cols-2 lg:grid-cols-3  sm:gap-6 gap-3'>
            {
                doctors.map(doctor => <DoctorCart key={doctor.id} doctor={doctor}></DoctorCart>)
            }
          </div>

          <div className='flex justify-center mt-4'>
          <button onClick={()=> setShowAll(!showAll)} className='btn bg-[#176AE5] text-white rounded-3xl w-fit'>{showAll ? "View less": "View All Doctors"}</button>
          </div>
        </div>
    );
};

export default DoctorContainer;