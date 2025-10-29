import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import MyAppoinmentList from '../MyAppoinmentList/MyAppoinmentList';
import { getStoredDoctor } from '../../Utilities/addToDB';
import DoctorChart from '../DoctorChart/DoctorChart';

const MyBooking = () => {
    const [bookingList, setBookingList] = useState([]);
    const data = useLoaderData();
    console.log(data);
    useEffect(() => {
        const StoredDrData = getStoredDoctor();
        const convertedStoredDrData = StoredDrData.map(id => parseInt(id))
        // console.log(convertedStoredDrData);
        const myBookingList = data.filter(doctor => convertedStoredDrData.includes(doctor.id))
        setBookingList(myBookingList);
    },[data])
    return (
        <div className='py-12 flex flex-col gap-8'>
            <DoctorChart data={data}/>
  
          <div className="flex flex-col gap-5">
            {
            bookingList.map(doctor => <MyAppoinmentList doctor={doctor.id} singleData={doctor}></MyAppoinmentList>)
          }
          </div>
        </div>
    );
};

export default MyBooking;