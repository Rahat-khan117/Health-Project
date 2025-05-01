import React, { useEffect, useState } from 'react';
import ServiceBox from './ServiceBox';

const Service = () => {
    const [services ,setServices] = useState([])
    useEffect(() => {
        fetch("service.json").then(res=>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='flex flex-col gap-3 justify-center mt-14 px-3'>
            <p className='md:text-4xl sm:text-2xl font-bold text-center'>We Provide Best Medical Services</p>
            <p className='text-sm text-[#0000009e] text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='flex items-center justify-center'>
            <div className='grid  md:grid-cols-4 grid-cols-2 lg:gap-9 md:gap-3 sm:gap-9 gap-4 justify-center mt-4'>
                {
                    services.map(service => <ServiceBox key={service.id} service={service}></ServiceBox>)
                }
            </div>
            </div>
        </div>
    );
};

export default Service;