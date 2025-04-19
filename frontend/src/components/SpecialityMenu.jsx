import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-gray-800 px-6">
      <h1 className="text-3xl font-semibold">Find by Speciality</h1>
      <p className="text-gray-600 mb-6 text-center">
        Simply browse through our extensive list of trusted doctors,
        schedule your appointments hassle-free.
      </p>

      {/* Wrapper to center items */}
      <div className="w-full flex justify-center">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pt-5">
          {specialityData.map((item, index) => (
            <Link
              onClick={() => scrollTo(0, 0)}
              key={index}
              to={`/doctors/${item.speciality}`}
              className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.speciality}
                className="w-16 sm:w-24 mb-2"
              />
              <p className="text-gray-700 font-medium text-center">{item.speciality}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialityMenu;
