import React from "react";
import CountUp from "react-countup";
import { FaFileSignature , FaPeopleRoof} from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const Success = () => {
  return (
    <div className="w-full mx-auto flex justify-center items-center flex-col pb-20">
      <h2 className="text-4xl text-center font-semibold pb-6">
        We Provide Best Medical Services
      </h2>
      <p className="text-center pb-10 w-5xl">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="card  bg-white w-full">
          <div className="card-body">
            <FaFileSignature size={40} className="text-blue-500"/>
            <h2 className="card-title text-6xl font-bold"><CountUp start={0} end={199} duration={2.75}></CountUp>+</h2>
            <h6 className="text-2xl">
              Total Doctors
            </h6>
          </div>
        </div>
        <div className="card  bg-white w-full">
          <div className="card-body">
            <FaStar size={40} className="text-yellow-500"/>
            <h2 className="card-title text-6xl font-bold"><CountUp start={0} end={467} duration={2.75}></CountUp>+</h2>
            <h6 className="text-2xl">
              Total Reviews
            </h6>
          </div>
        </div>
        <div className="card  bg-white w-full">
          <div className="card-body">
            <IoIosPeople size={40} className="text-indigo-500"/>
            <h2 className="card-title text-6xl font-bold"><CountUp start={0} end={1900} duration={2.75}></CountUp>+</h2>
            <h6 className="text-2xl">
              Patients
            </h6>
          </div>
        </div>
        <div className="card  bg-white w-full">
          <div className="card-body">
            <FaPeopleRoof size={40} className="text-green-600"/>
            <h2 className="card-title text-6xl font-bold"><CountUp start={0} end={300} duration={2.75}></CountUp>+</h2>
            <h6 className="text-2xl">
              Total Stuffs
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
