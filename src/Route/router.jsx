
import Dashboard from "@/Layout/Dashboard";
import Main from "@/Layout/Main";
import AddProductPage from "@/page/AddProductPage/AddProductPage";
import AllProduct from "@/page/AllProduct/AllProduct";
import Contact from "@/page/Contact/Contact";
import AdminOverview from "@/page/Dashboard/AdminOverview";

import Home from "@/page/home/Home/Home";
import Details from "@/page/ItemDetails/Details";
import Login from "@/page/Login/Login";
import ManageProduct from "@/page/ManageProduct/ManageProduct";
import NotFoundPage from "@/page/NotFound/NotFoundPage";
import PrivacyPolicy from "@/page/PrivacyPolicy/PrivacyPolicy";
import Signup from "@/page/Signup/Signup";
import TermsOfService from "@/page/TermsOfService/TermsOfService";
import UserManagementTable from "@/page/UserManagementTable/UserManagementTable";
import {
    createBrowserRouter,
 
  } from "react-router-dom";("react-router-dom");


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<NotFoundPage></NotFoundPage>,
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
              
                
            },
            {
                path:'/privacyPolicy',
                element:<PrivacyPolicy></PrivacyPolicy>
            },
            {
                path:'/termsOfService',
                element:<TermsOfService></TermsOfService>
            }
        ])
    },
    // dashboard
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
         errorElement:<NotFoundPage></NotFoundPage> ,                              
        children:([
            {
                path:'overview',
                element:<AdminOverview></AdminOverview>
            },
      
     
         
            {
                path:'addProduct',
                element:<AddProductPage></AddProductPage>
            },
            {
                path:'user',
                element:<UserManagementTable></UserManagementTable>
            },
            {
                path:'manageProduct',
                element:<ManageProduct></ManageProduct>
            }
        ])
    }
])

export default router