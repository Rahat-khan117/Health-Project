import React from 'react';
import Hero from '../components/Hero';
import DoctorContainer from '../components/DoctorContainer';
import Service from '../components/Service';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <DoctorContainer></DoctorContainer>
            <Service></Service>
        </div>
    );
};

export default Home;