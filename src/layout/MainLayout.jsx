import React from 'react';
import NavBar from '../components/mainComponents/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/mainComponents/Footer';

const MainLayout = () => {
    return (
        <>
          <NavBar></NavBar> 
          <div className='min-h-[calc(100vh-420px)] bg-[#EFEFEF] pb-16'>
          <Outlet ></Outlet>
          </div> 
          <Footer></Footer>
        </>
    );
};

export default MainLayout;