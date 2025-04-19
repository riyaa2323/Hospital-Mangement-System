import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg items-center justify-between px-6 py-10 md:px-10 lg:px-20">
      
      {/*----Left Side----*/}
      <div className="md:w-1/2 space-y-6">
        <p className="text-3xl md:text-4xl font-bold leading-snug text-gray-800">
          Book Appointment<br />With Trusted Doctors
        </p>

        <div className="flex items-start gap-4">
          <img
            src={assets.group_profiles}
            alt="Group Profiles"
            className="w-28"
          />
          <p className="text-gray-600">
            Simply browse through our extensive list of trusted doctors,
            <br />schedule your appointments hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-5 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 w-fit"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="Arrow" className="w-2" />
        </a>
      </div>

      {/*----Right Side----*/}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src={assets.header_img} alt="Header" className="w-full max-w-md" />
      </div>
      
    </div>
  );
};

export default Header;
