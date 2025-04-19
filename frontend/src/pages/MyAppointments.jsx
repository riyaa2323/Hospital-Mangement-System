import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">My Appointments</h1>
      
      <div className="space-y-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div key={index} className="flex flex-col bg-white p-4 rounded-lg shadow-md">
            {/* Doctor's Image and Details */}
            <div className="flex items-center space-x-4 mb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover shadow-sm" />
              <div className="flex-1">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.speciality}</p>
              </div>
            </div>

            {/* Address */}
            <p className="text-sm font-medium">Address:</p>
            <p className="text-sm text-gray-700">{item.address.line1}</p>
            <p className="text-sm text-gray-700">{item.address.line2}</p>

            {/* Date & Time */}
            <p className="text-sm font-medium mt-2">
              <span className="font-semibold">Date & Time:</span> 25 July 2026 | 8:30 PM
            </p>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
                Pay Online
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
