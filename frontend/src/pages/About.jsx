import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="flex flex-col items-center my-10 px-6 text-gray-800">
      <p className="text-4xl font-bold mb-6">
        About <span className="text-blue-500">Us</span>
      </p>

      <div className="flex flex-col md:flex-row gap-10 items-center max-w-5xl">
        <img
          src={assets.about_image}
          alt="About MediEase"
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />

        <div className="flex flex-col gap-4 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>MediEase</strong> is a smart, user-friendly doctor appointment booking system
            designed to simplify healthcare access for everyone. Our mission is to bridge the gap
            between patients and healthcare providers by offering a seamless and efficient platform
            for scheduling medical consultations.
          </p>
          <p>
            Whether you're looking for a general physician, specialist, or diagnostic services,
            MediEase helps you find trusted doctors near you, view their availability, and book
            appointments instantly — all from the comfort of your home.
          </p>
          <p>
            We are committed to improving patient care by empowering both users and healthcare
            professionals with technology.
          </p>
          <p className="font-semibold text-green-600">
            Your health, our priority — with ease.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 text-center max-w-3xl">
        <p className="text-3xl font-semibold mb-6">
          Why <span className="text-blue-500">Choose Us?</span>
        </p>
        <ul className="text-left list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>Easy and quick appointment booking process</li>
          <li>Verified and experienced doctors across specialties</li>
          <li>Real-time availability and instant confirmations</li>
          <li>Reschedule or cancel anytime with ease</li>
          <li>Reminders and follow-ups for better care continuity</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
