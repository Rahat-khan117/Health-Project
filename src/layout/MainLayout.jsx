import React, { useState } from 'react';
import NavBar from '../components/mainComponents/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/mainComponents/Footer';
import Menu from '../components/Menu';

const MainLayout = () => {
   const [menu ,setMenu] = useState(false)
   const handleMenu = () => { 
     setMenu(!menu)
   }

    return (
        <>
          <div className='fixed right-0 left-0'>
          <NavBar handleMenu={handleMenu}></NavBar> 
          </div>
          <div className={ menu ? "fixed top-[70px] right-0" : "hidden"}>
            <Menu></Menu>
          </div>
          <div className='min-h-[calc(100vh-420px)] pt-[80px] bg-[#EFEFEF] pb-16'>
          <Outlet></Outlet>
          </div> 
          <Footer></Footer>
        </>
    );
};

export default MainLayout;