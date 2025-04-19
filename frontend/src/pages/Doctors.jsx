import React from 'react'
import { useParams} from 'react-router-dom'
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Doctors = () => {
  const {speciality} = useParams();
  const [filterDoc,setFilterDoc]=useState([]);
  const navigate = useNavigate();
  const {doctors} = useContext(AppContext);
  const applyFilter=()=>{
    if (speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality==speciality));
  }else{
      setFilterDoc(doctors);
    }
  }
  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);
  return (
    <div>
      <p>
        Browse through the doctors specialist
      </p>
      <div className='flex flex-col sm:flex-row gap-4 mt-5 text-sm text-gray-600'>
      <div className='flex flex-col gap-4 text-sm text-gray-600'>
  <p
    onClick={() => navigate('/doctors/General physician')}
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === "General physician" ? "bg-indigo-100 text-black" : ""
    }`}
  >
    General physician
  </p>
  <p
    onClick={() => navigate('/doctors/Gynecologist')}
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
    }`}
  >
    Gynecologist
  </p>
  <p
    onClick={() => navigate('/doctors/Dermatologist')}
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
    }`}
  >
    Dermatologist
  </p>
  <p
    onClick={() => navigate('/doctors/Pediatricians')}
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
    }`}
  >
    Pediatricians
  </p>
  <p
    onClick={() => navigate('/doctors/Neurologist')}
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
    }`}
  >
    Neurologist
  </p>
  <p
    onClick={() => navigate('/doctors/Gastroenterologist')}
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""
    }`}
  >
    Gastroenterologist
  </p>
</div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                key={index}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <div className="flex justify-between text-sm text-green-600 mb-1">
                  <p>{item.speciality}</p>
                  <p>Available</p>
                </div>
                <p className="font-semibold text-lg text-gray-800">{item.name}</p>
              </div>))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors ;