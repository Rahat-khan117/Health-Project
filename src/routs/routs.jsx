import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import MyBooking from "../pages/MyBooking";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";


const router = createBrowserRouter([
    {
      path:"/",
      Component:MainLayout,
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
            element:<Blogs></Blogs>
        },
        {
            path:"Contact",
            element:<Contact></Contact>
        }
      ]
    }
])
export default router