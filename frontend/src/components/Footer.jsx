import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <img src={assets.logo} alt="Mediease Logo" className="h-12 mb-4" />
          <p className="text-sm text-gray-500">
            Book appointments with certified doctors anytime, anywhere.
            <br />
            📍 Trusted by thousands | 🔒 Secure & Private | 🕒 24/7 Access
          </p>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Contact Us</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>📞 +91 76567 483</li>
            <li>📧 doctors123@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 <span className="text-gray-700 font-medium">Mediease</span>. All rights reserved. <br />
        <span>Simplifying healthcare, one appointment at a time.</span>
      </div>
    </div>
  );
};

export default Footer;
