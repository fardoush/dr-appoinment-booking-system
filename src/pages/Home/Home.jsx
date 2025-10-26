import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Doctors/Doctors';
import Success from '../../components/Success/Success';

const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <Banner/>
            <Doctors data={data}/>
            <Success/>
        </div>
    );
};

export default Home;