import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../pages/Home/Home';
import Root from '../pages/Root/Root';
import MyBooking from '../pages/MyBooking/MyBooking';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';
import Error from '../pages/Error/Error';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error/>,
    children:[
       {
        index: true,
        path: "/",
        loader: ()=> fetch("doctorData.json"),
        Component: Home 
       },
       {
        path:"/myBooking",
        Component: MyBooking
       },
       {
        path:"/blog",
        Component:Blog
       },

       {
        path:"/contact",
        Component: Contact
       }

    ]
  },
]);
