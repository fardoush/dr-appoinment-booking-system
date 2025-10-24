import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <Banner/>
            <Doctors data={data}/>
        </div>
    );
};

export default Home;