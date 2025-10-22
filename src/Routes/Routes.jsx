import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../pages/Home/Home';
import Root from '../pages/Root/Root';
import MyBooking from '../pages/MyBooking/MyBooking';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
       {
        index: true,
        path: "/",
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
