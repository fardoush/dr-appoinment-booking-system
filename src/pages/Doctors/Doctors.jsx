import React, { Suspense } from "react";
import Doctor from "../Doctor/Doctor";
import { useState } from "react";

const Doctors = ({ data }) => {
  const [visible, setVisible] = useState(6);

      const handleLoadMore = () => {
        // console.log(singleData.length);
        setVisible(data.length);

    }
  return (
    <div className="py-15 w-6xl mx-auto flex items-center  justify-center flex-col">
      <div className=" w-3xl flex justify-center items-center flex-col pb-10">
        <h2 className="text-4xl text-center pb-4">Our Best Doctors</h2>
        <p className="text-center text-lg">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {data.slice(0, visible).map((singleData) => (
          <Doctor singleData={singleData} key={singleData.id} handleLoadMore={handleLoadMore}></Doctor>
        ))}
      </div>

      {
        visible < data.length && (
                <button onClick={handleLoadMore} className="mt-8 btn rounded-full bg-blue-400 text-white border-none shadow-none ">Show More</button>

        )
      }

      <Suspense />
    </div>
  );
};

export default Doctors;
