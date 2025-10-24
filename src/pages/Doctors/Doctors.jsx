import React, { Suspense } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({data}) => {

    return (
        <div  className='py-20 w-6xl mx-auto flex items-center  justify-center flex-col'>
           <div className=" w-3xl flex justify-center items-center flex-col">
             <h2 className="text-4xl text-center">Our Best Doctors</h2>
            <p className="text-center text-lg">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{
    data.map(singleData => <Doctor singleData={singleData} key={singleData.id}></Doctor>)
}
           </div>
            <Suspense/>
        </div>
    );
};

export default Doctors;