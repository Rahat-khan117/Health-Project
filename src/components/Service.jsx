import React, { useEffect, useState } from 'react';
import ServiceBox from './ServiceBox';

const Service = () => {
    const [services ,setServices] = useState([])
    useEffect(() => {
        fetch("service.json").then(res=>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='flex flex-col gap-3 justify-center mt-14'>
            <p className='text-4xl font-bold text-center'>We Provide Best Medical Services</p>
            <p className='text-sm text-[#0000009e] text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='flex gap-9 justify-center mt-4'>
                {
                    services.map(service => <ServiceBox service={service}></ServiceBox>)
                }
            </div>
        </div>
    );
};

export default Service;