import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import MyBooking from "../pages/MyBooking";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Details from "../pages/Details";
import Error from "../pages/Error";
import NavBar from "../components/mainComponents/Navbar";
import Footer from "../components/mainComponents/Footer";


const router = createBrowserRouter([
    {
      path:"/",
      Component:MainLayout,
      errorElement: <div>
        <NavBar></NavBar>
        <Error></Error>
      </div> ,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/MyBooking",
            element: <MyBooking></MyBooking>
        },
        {
            path:"/Blogs",
            element:<Blogs></Blogs>,
            loader:() => fetch("../Blogs.json")
        },
        {
            path:"/Contact",
            element:<Contact></Contact>
        },
        {
            path:"/details/:id",
            element:<Details></Details>,
            loader: () => fetch("../Doctor.json")
        }
      ]
    }
])
export default router