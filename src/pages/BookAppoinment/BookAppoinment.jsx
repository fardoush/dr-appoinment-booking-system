import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const BookAppoinment = () => {
  return (
    <div className="w-7xl   mx-auto bg-white text-black rounded-3xl p-6">
      <h4 className="text-4xl text-center pb-3 font-bold">
        Book an Appointment
      </h4>
      <div className=" py-4 flex justify-between items-center border-dashed border-gray-200 border-t-2 border-b-2">
        <h6 className="text-2xl font-semibold">Availability</h6>
        <span className="py-4 badge rounded-full bg-green-200 text-green-600 border-green-600">
          Doctor Available Today
        </span>
      </div>
      <span className="mt-4 text-lg py-5 badge rounded-full  text-amber-500 bg-orange-100 border-none ">
        {" "}
        <FiAlertTriangle />
        Due to high patient volume, we are currently accepting appointments for
        today only. We appreciate your understanding and cooperation.
      </span>
      <button
        className="mt-8 btn btn-full rounded-full bg-transparent  text-blue-500  border border-blue-500 hover:bg-blue-500 hover:text-white shadow-none transition duration-300 ease-in-out
 "
      >
        Book Appointment Now
        <ToastContainer />
      </button>
    </div>
  );
};

export default BookAppoinment;
