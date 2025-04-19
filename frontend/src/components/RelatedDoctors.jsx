import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const [relDocs, setRelDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Related Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Grid with exactly 2 rows (max 10 doctors) */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-5 px-3 sm:px-0">
        {relDocs.slice(0, 10).map((item) => (
          <div
            key={item._id}
            onClick={() => {navigate(`/appointment/${item._id}`);scrollTo(0,0)}}
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
    </div>
  );
};

export default RelatedDoctors;
