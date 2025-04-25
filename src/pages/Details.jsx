import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { addDoctor } from "../utils";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {


  

// for catch the dynamic path
  const data = useLoaderData();
  const { id } = useParams();
  const machDetails = data.find((doctor) => doctor.id === parseInt(id));



// for handle the saved data in local storage
  const handleAppointment = ()=> {
    addDoctor(machDetails)
  }


//   for handle the onclick toastify
 const [isClick , setIsClick] = useState(false)
 useEffect(()=> {  
    if(isClick){
        toast.success(`Appointment scheduled for ${machDetails.name} successfully` ,{
            position: "top-right",
            autoClose: 3000,
            toastId: `favorite-toast`
        })
    } 
 },[isClick,machDetails])
console.log(machDetails)
//  navigate a new page
const navigate = useNavigate();
const goToPage = () => {
    setTimeout(() => {
        navigate("/MyBooking");
      }, 2000);
  };

  
  return (
    <div className="px-16 pt-10">
      <div className="h-[200px] bg-white rounded-2xl flex flex-col gap-3 items-center justify-center ">
        <p className="text-3xl font-bold text-center">
          Doctor’s Profile Details
        </p>
        <p className="text-sm text-[#000000a4] text-center">
          Explore expert doctor profiles with credentials, specialties, and
          availability <br /> all in one convenient place.
        </p>
      </div>
      <div className="h-[350px] bg-white rounded-2xl mt-10 flex gap-4">
        <div>
          <img
            className="h-[310px] w-[300px] ml-5 mt-5 rounded-3xl"
            src={machDetails.image}
          />
        </div>
        <div className="ml-5 mt-5 ">
          <p className="text-3xl font-bold">{machDetails.name}</p>
          <p className="text-[#00000086] font-bold mt-4">
            {machDetails.education}
          </p>
          <p className="text-[#00000095] font-bold mt-4">Wording at,</p>
          <p className="text-2xl font-bold mt-1">{machDetails.working}</p>
          <div className="border-t-1 border-t-[#00000095] border-dashed mt-5 w-full">
            <hr  />
          </div>
          <div className="flex gap-1 items-center mt-3">
            <i className="fa-solid fa-registered"></i>
            <p>Reg No:{machDetails.reg}</p>
          </div>
          <div className="border-t-1 border-dashed border-t-[#00000095] mt-5 w-full">
            <hr  />
          </div>
          <div className="flex gap-4 mt-4">
            <p className="font-bold">Availability</p>
            <button className='btn text-[12px] rounded-3xl h-[25px] text-[#FFA000] bg-[#ffa20032]'>Sunday</button>
            <button className='btn text-[12px] rounded-3xl h-[25px] text-[#FFA000] bg-[#ffa20034]'>Monday</button>
            <button className='btn text-[12px] rounded-3xl h-[25px] text-[#FFA000] bg-[#ffa20032]'>Thursday</button>
          </div>
          <div className="flex gap-2 mt-3">
            <p className="font-bold">Consultation Fee:</p>
            <p className="text-blue-500">Taka: <span>{machDetails.fee}</span> <span className="text-[#00000081]">(Including vat)</span> <span className="text-blue-500">Per Consultation</span> </p>
          </div>
        </div>

        
      </div>
      <div className="h-[250px] bg-white rounded-2xl mt-6">
           <div className="pt-5">
            <p className="text-3xl text-center font-bold">Book Appointment</p>
           </div>
           <div className="border-t-1 border-dashed border-t-[#0000004f] mt-5 w-full">
            <hr  />
          </div>
           <div className="flex justify-between items-center px-10 mt-2">
            <p className="font-bold text-xl">Availability</p>
            <button className="btn text-[#09982F] bg-[#09982f2e] rounded-4xl">Doctor Available today</button>
           </div>
           <div className="border-t-1 border-t-[#00000056] border-dashed mt-2 w-full">
            <hr  />
          </div>
           <div className="mt-2 pl-10">
            <button className="btn rounded-3xl h-[25px] text-[#FFA000] bg-[#ffa20032] text-[12px]">
            <i className="fa-solid fa-triangle-exclamation"></i>
                Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</button>
           </div>
           <div className="flex justify-center">
           <button onClick={()=> {
            handleAppointment()
            setIsClick(!isClick)
            goToPage()
           }} className="btn bg-[#176AE5] text-white mt-5 rounded-3xl w-[90%]">Book Appointment Now</button>
           <ToastContainer/>
           </div>
        </div>
    </div>
  );
};

export default Details;
