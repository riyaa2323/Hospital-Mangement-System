import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RElatedDoctors from '../components/RElatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [dateSlots, setDateSlots] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Fetch doctor info
  const fetchDocInfo = () => {
    const info = doctors.find((doc) => doc._id === docId);
    setDocInfo(info);
  };

  // Generate date and time slots
  const generateSlots = () => {
    const today = new Date();
    const dates = [];
    const times = [];

    // Generate 6 days
    for (let i = 0; i < 6; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const day = daysOfWeek[date.getDay()];
      const formattedDate = date.toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
      dates.push({ day, date: formattedDate });
    }

    // Generate only 6 time slots starting at 10:00 AM
    let startTime = new Date();
    startTime.setHours(10, 0, 0, 0);
    for (let i = 0; i < 6; i++) {
      times.push(startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      startTime.setMinutes(startTime.getMinutes() + 30);
    }

    setDateSlots(dates);
    setTimeSlots(times);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  useEffect(() => {
    if (docInfo) generateSlots();
  }, [docInfo]);

  if (!docInfo) return <p className="text-center mt-10 text-gray-500 text-sm">Loading...</p>;

  return (
    <div className="p-4 sm:p-6">
      {/*-----Doctor Details-----*/}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 text-xs text-gray-700">
        {/* Doctor Image */}
        <div className="sm:w-1/4 w-full">
          <img
            className="w-full rounded-lg border border-gray-300 bg-primary"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>

        {/* Doctor Info */}
        <div className="flex-1 border border-gray-300 rounded-lg p-4 bg-white shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <p>{docInfo.name}</p>
            <img src={assets.verified_icon} alt="verified" className="w-4 h-4" />
          </div>

          <p className="text-xs text-gray-600">{docInfo.degree} — {docInfo.speciality}</p>

          <button className="mt-2 bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-medium w-fit">
            {docInfo.experience}
          </button>

          <div className="mt-3">
            <div className="flex items-center gap-2 font-medium text-gray-800 text-sm">
              <p>About</p>
              <img src={assets.info_icon} alt="info" className="w-3 h-3" />
            </div>
            <p className="text-xs text-gray-600 mt-1">{docInfo.about}</p>
          </div>

          <div className="pt-3 border-t border-gray-200 text-xs text-gray-700">
            <span className="font-medium">Appointment Fee: </span>
            <span>{currencySymbol}{docInfo.fees}</span>
          </div>
        </div>
      </div>

      {/*-----Date Slots-----*/}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">Select a Date</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
          {dateSlots.map((slot, index) => (
            <button
              key={index}
              onClick={() => setSelectedDateIndex(index)}
              className={`px-4 py-3 rounded-lg border text-center ${
                index === selectedDateIndex
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="font-medium text-sm">{slot.day}</p>
              <p className="text-xs">{slot.date}</p>
            </button>
          ))}
        </div>
      </div>

      {/*-----Time Slots-----*/}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">Select a Time</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
          {timeSlots.map((time, index) => (
            <button
              key={index}
              onClick={() => setSelectedTimeIndex(index)}
              className={`px-4 py-3 rounded-lg border text-center ${
                index === selectedTimeIndex
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm font-medium">{time}</p>
            </button>
          ))}
        </div>
      </div>

      {/*-----Selected Slot Info-----*/}
      {selectedDateIndex !== null && selectedTimeIndex !== null && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            You have selected:{" "}
            <span className="font-semibold">
              {dateSlots[selectedDateIndex].day}, {dateSlots[selectedDateIndex].date} at {timeSlots[selectedTimeIndex]}
            </span>
          </p>
          <button className="mt-4 bg-primary text-white px-6 py-2 rounded-lg">
            Book an Appointment
          </button>
        </div>
        
      )}
              {/*---Listing Related Doctors--*/}
<RElatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;
