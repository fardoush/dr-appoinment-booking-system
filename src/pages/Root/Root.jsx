import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='w-full mx-auto '>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;