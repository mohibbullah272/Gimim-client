import Dashboard from "@/Layout/Dashboard";
import Main from "@/Layout/Main";
import AboutUs from "@/page/AboutUs/AboutUs";
import AllProduct from "@/page/AllProduct/AllProduct";
import Contact from "@/page/Contact/Contact";
import Details from "@/page/ItemDetails/Details";
import Login from "@/page/Login/Login";
import Signup from "@/page/Signup/Signup";
import Home from "@/page/home/Home/Home";
import {
    createBrowserRouter,
 
  } from "react-router-dom";("react-router-dom");


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allProduct',
                element:<AllProduct></AllProduct>
            },
            {
                path:'/aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/details/:id',
                element:<Details></Details>
            }
        ])
    },
    // dashboard
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:([
            
        ])
    }
])

export default router