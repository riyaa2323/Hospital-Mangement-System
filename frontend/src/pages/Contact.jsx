import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="flex flex-col items-center my-10 px-6 text-gray-800">
      <p className="text-4xl font-bold mb-6">
        Contact <span className="text-blue-500">Us</span>
      </p>

      <div className="flex flex-col md:flex-row gap-10 items-center max-w-5xl">
        <img
          src={assets.contact_image}
          alt="Contact Us"
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />

        <div className="flex flex-col gap-3 text-sm sm:text-base leading-relaxed">
          <p><strong>Email:</strong> support@mediease.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> 123 Health Street, Wellness City, India</p>
          <p><strong>Working Hours:</strong> Mon - Sat: 9:00 AM to 6:00 PM</p>
          <p className="text-green-600 font-semibold">We're here to assist you with all your queries!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
