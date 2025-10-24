
import { FaHandHoldingMedical } from "react-icons/fa";
import { Link } from "react-router";


const Doctor = ({singleData}) => {
    
    const {id,image,available,experience_years,name,education,registration_number,} = singleData;



    return (
        <div className="card bg-white text-black w-full shadow-sm">
  <figure>
    <img
      src={image}
      alt={name} />
  </figure>
  <div className="card-body">
    <div className="card-actions ">
      <div className={`badge rounded-full ${ available === "Available" ? "text-green-600 bg-green-100 border-green-600" : "text-red-400 bg-red-100 border-red-400"}`}>{available}

      </div>
      <div className="badge text-blue-600 bg-blue-100 border-blue-600 rounded-full">{experience_years}+ Years Experience</div>
    </div>
    <h2 className="card-title">
      {name}
      
    </h2>
    <p>{education}</p>
    <h6 className="text-xl py-4 border-t-2 border-dashed border-gray-200"><FaHandHoldingMedical className='inline-block mr-2 text-blue-500' /> Reg No: {registration_number}</h6>
    

         <Link to = {`/doctorDetails/${id}`} className='btn btn-full rounded-full bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white shadow-none transition duration-300 ease-in-out
 '>View Details</Link>
 
  </div>
</div>
    );
};

export default Doctor;