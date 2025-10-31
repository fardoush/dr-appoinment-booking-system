import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAppoinmentList = ({ singleData, onCancel }) => {
  if (!singleData) return null;
  const { id, name, education, fee_bdt } = singleData;

  const handleCancel = () => {
    toast.error(`Appointment with ${name} Cancelled`);
    onCancel(id);
  };

  return (
    <div className="w-7xl mx-auto bg-white text-black rounded-3xl p-6">
      <div className="pb-4 flex justify-between items-center border-dashed border-gray-200 border-b-2">
        <div>
          <h6 className="text-2xl font-semibold">{name}</h6>
          <p className="text-base text-gray-400">{education}</p>
        </div>
        <span className="text-base text-gray-400">
          Appointment Fee : {fee_bdt} Taka + Vat
        </span>
      </div>

      <button
        onClick={handleCancel}
        className="mt-8 btn btn-full rounded-full bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white shadow-none transition duration-300 ease-in-out"
      >
        Cancel Appointment
      </button>

      <ToastContainer />
    </div>
  );
};

export default MyAppoinmentList;
