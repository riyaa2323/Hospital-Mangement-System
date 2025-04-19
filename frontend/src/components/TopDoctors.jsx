import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  if (!doctors || doctors.length === 0) {
    return (
      <div className="text-center my-10 text-gray-500">
        Loading top doctors...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors To Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Grid with exactly 2 rows (max 10 doctors) */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-5 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 p-4"
          >
            <img
              src={item.image || '/default-doctor.jpg'}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <div className="flex justify-between text-sm text-green-600 mb-1">
              <p>{item.speciality}</p>
              <p>Available</p>
            </div>
            <p className="font-semibold text-lg text-gray-800">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => {
            navigate('/doctors');
            window.scrollTo(0, 0);
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
