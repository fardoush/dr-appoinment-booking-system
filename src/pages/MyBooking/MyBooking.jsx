import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router";
import MyAppoinmentList from "../MyAppoinmentList/MyAppoinmentList";
import { getStoredDoctor, removeFromStoredDB } from "../../Utilities/addToDB";
import DoctorChart from "../DoctorChart/DoctorChart";

const MyBooking = () => {
  const [bookingList, setBookingList] = useState([]);
  const data = useLoaderData();
  const location = useLocation();

  const loadBookings = () => {
    const storedDrData = getStoredDoctor().map((id) => parseInt(id));
    const myBookingList = data.filter((doctor) =>
      storedDrData.includes(doctor.id)
    );
    setBookingList(myBookingList);
  };

  useEffect(() => {
    loadBookings();
  }, [data]);

  // 🔁 reload when navigate with refresh flag
  useEffect(() => {
    if (location.state?.refresh) {
      loadBookings();
    }
  }, [location]);

  const handleCancelAppointment = (id) => {
    removeFromStoredDB(id);
    const updatedList = bookingList.filter((doctor) => doctor.id !== id);
    setBookingList(updatedList);
  };

  return (
    <div className="py-12 flex flex-col gap-8">
      <DoctorChart data={bookingList} />

      <div className="flex flex-col gap-5">
        {bookingList.length > 0 ? (
          bookingList.map((doctor) => (
            <MyAppoinmentList
              key={doctor.id}
              singleData={doctor}
              onCancel={handleCancelAppointment}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No Appointments Found</p>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
