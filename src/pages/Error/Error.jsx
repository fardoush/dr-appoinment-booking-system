import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <>
    <div className="p-28">
<div className="hero bg-gray-200 rounded-2xl p-20 ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">No Doctor Found !...</h1>
            <p className="py-6 text-xl">
              No Doctor Found with this registration No-
            </p>
            <h6 className="text-2xl"> Search text</h6>
            <Link to="/" className="btn btn-primary">View All Details</Link>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Error;
