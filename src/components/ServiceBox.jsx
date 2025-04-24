import React from 'react';
import CountUp from 'react-countup';

const ServiceBox = ({service}) => {
    return (
        <div className='h-[200px] w-[200px] bg-white rounded-xl pl-9 pt-6 space-y-3'>
            <img src={service.image}/>
            <p className='font-bold text-5xl'>
                <CountUp end={service.number} duration={10}></CountUp>+</p>
            <p>{service.name}</p>
        </div>
    );
};

export default ServiceBox;