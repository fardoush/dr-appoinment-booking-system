import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const DoctorChart = ({ data }) => {
  if (!Array.isArray(data)) {
    console.warn("DoctorChart expected array but got:", data);
    return <p className="text-center text-gray-500">No valid data found</p>;
  }

  const formatted = data.map((doctor) => ({
    name: doctor.name,
    experience: doctor.experience_years,
    fee: doctor.fee_bdt,
  }));

  return (
    <div className="w-7xl mx-auto bg-white p-10 rounded-2xl h-[400px]">
      <ResponsiveContainer>
        <BarChart data={formatted}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="experience" fill="#82ca9d" name="Experience (Years)" />
          <Bar dataKey="fee" fill="#8884d8" name="Consultation Fee (BDT)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoctorChart;
