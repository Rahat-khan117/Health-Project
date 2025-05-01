import React from 'react';
import CountUp from 'react-countup';

const ServiceBox = ({service}) => {
    return (
        <div className='lg:h-[200px] lg:w-[200px] md:h-[175px] md:w-[175px] sm:h-[200px] sm:w-[200px] bg-white rounded-xl sm:pl-9 pl-5 pt-6 lg:space-y-3 md:space-y-1'>
            <img src={service.image}/>
            <p className='font-bold lg:text-5xl md:text-3xl sm:text-5xl text-4xl'>
                <CountUp end={service.number} duration={10}></CountUp>+</p>
            <p className='mb-2'>{service.name}</p>
        </div>
    );
};

export default ServiceBox;