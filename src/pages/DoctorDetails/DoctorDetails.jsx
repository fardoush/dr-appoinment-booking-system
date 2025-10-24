import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DefaultBanner from '../../components/DefaultBanner/DefaultBanner';

const DoctorDetails = () => {
    const {id} = useParams();
    const drId = parseInt(id);
    const data = useLoaderData();
    const singleDoctor = data.find(doctor => doctor.id === drId);
    const {image,name,education,workplace,registration_number,fee_bdt,days} = singleDoctor || {};
    return (
        <div className='w-full mx-auto flex justify-center items-center flex-col'>
        <DefaultBanner/>

        <div className=" 2xl:w-7xl lg:w-7xl flex gap-6 justify-between  p-10 bg-gray-100 rounded-3xl">
            <div className="w-[40%]">
                <img src={image} alt={name} className='rounded-3xl'/>
            </div>
            <div className="w-[60%]">
                <h4 className="text-2xl font-semibold pb-4">{name}</h4>
                <h4 className="text-gray-500 pb-4">{education}</h4>
                <h4 className="text-gray-500 pb-4">Working At</h4>
                <h4 className="text-lg font-semibold text-gray-800 pb-4 ">{workplace.name} {workplace.address}</h4>
                {/* <h4 className="text">{education}</h4>
                <h4 className="text">{workplace}</h4>
                <h4 className="text">{registration_number}</h4> */}
                <h4 className="text-lg font-semibold py-4 border-t-2 border-b-2 border-dashed border-gray-200">Reg No: {registration_number}</h4> 
                <p className='py-4'><strong className='mr-3 '>Availability </strong> 
                {
                    days.map((day) => (<span className='badge text-amber-500 bg-amber-100 border-amber-500 mr-3 rounded-full'>{day}</span>))
                }
                
               
           
                </p>
                <p className=''><strong>Consultation Fee:</strong> <span className='text-blue-500 font-bold '>Taka: {fee_bdt} <span className='text-gray-400 font-normal'>(incl. Vat) </span>Per consultation</span></p>
            </div>
        </div>
        </div>
    );
};

export default DoctorDetails;
