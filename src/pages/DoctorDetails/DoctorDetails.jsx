import React, { useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import DefaultBanner from '../../components/DefaultBanner/DefaultBanner';
import { FiAlertTriangle } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import { addToStoredDB } from '../../Utilities/addToDB';

const DoctorDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const drId = parseInt(id);
  const data = useLoaderData();
  const singleDoctor = data.find(doctor => doctor.id === drId);

  const { image, name, education, workplace, registration_number, fee_bdt, days } = singleDoctor || {};

  const handleAppoinment = (id) => {
    toast.success("Appointment Schedule For " + name + " Successfully", {
      autoClose: 1000, // toast 1s show হবে
      onClose: () => navigate("/myBooking", { state: { refresh: true } }) // toast শেষে navigate
    });

    addToStoredDB(parseInt(id));
    
  };



  return (
    <div className='w-full mx-auto flex justify-center items-center flex-col gap-5'>
      <DefaultBanner />

      {/* Doctor Info */}
      <div className="2xl:w-7xl lg:w-7xl flex gap-6 justify-between p-10 bg-white rounded-3xl">
        <div className="w-[40%]">
          <img src={image} alt={name} className='rounded-3xl' />
        </div>
        <div className="w-[60%]">
          <h4 className="text-2xl font-semibold pb-4">{name}</h4>
          <h4 className="text-gray-500 pb-4">{education}</h4>
          <h4 className="text-gray-500 pb-4">Working At</h4>
          <h4 className="text-lg font-semibold text-gray-800 pb-4 ">
            {workplace.name} {workplace.address}
          </h4>
          <h4 className="text-lg font-semibold py-4 border-t-2 border-b-2 border-dashed border-gray-200">
            Reg No: {registration_number}
          </h4>

          <p className='py-4'>
            <strong className='mr-3'>Availability</strong>
            {days.map((day, index) => (
              <span
                key={index}
                className='badge text-amber-500 bg-amber-100 border-amber-500 mr-3 rounded-full'
              >
                {day}
              </span>
            ))}
          </p>

          <p>
            <strong>Consultation Fee:</strong>{" "}
            <span className='text-blue-500 font-bold'>
              Taka: {fee_bdt}{" "}
              <span className='text-gray-400 font-normal'>(incl. Vat)</span> Per consultation
            </span>
          </p>
        </div>
      </div>

      {/* Book Appointment Section */}
      <div className="w-7xl mx-auto bg-white text-black rounded-3xl p-6">
        <h4 className="text-4xl text-center pb-3 font-bold">Book an Appointment</h4>

        <div className="py-4 flex justify-between items-center border-dashed border-gray-200 border-t-2 border-b-2">
          <h6 className="text-2xl font-semibold">Availability</h6>
          <span className="py-4 badge rounded-full bg-green-200 text-green-600 border-green-600">
            Doctor Available Today
          </span>
        </div>

        <span className="mt-4 text-lg py-5 badge rounded-full text-amber-500 bg-orange-100 border-none">
          <FiAlertTriangle className="inline mr-2" />
          Due to high patient volume, we are currently accepting appointments for today only. 
          We appreciate your understanding and cooperation.
        </span>

        <button
          onClick={() => handleAppoinment(id)}
          className="mt-8 btn btn-full rounded-full bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white shadow-none transition duration-300 ease-in-out"
        >
          Book Appointment Now
        </button>

        <ToastContainer />
      </div>
    </div>
  );
};

export default DoctorDetails;
