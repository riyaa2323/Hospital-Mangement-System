import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true); // Toggle this for testing
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = ['/', '/doctors', '/about', '/contact'];
  const labels = ['Home', 'All Doctors', 'About Us', 'Contacts'];

  return (
    <div className="relative">
      {/* Top Navbar */}
      <div className="flex items-center justify-between text-sm py-4 border-b border-gray-300 px-4">
        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          className='w-36 cursor-pointer h-10'
          src={assets.logo}
          alt="logo"
        />

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-6 font-medium'>
          {links.map((path, index) => (
            <li key={path} className='relative'>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-semibold' : 'text-black'
                }
              >
                {labels[index]}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className='flex items-center gap-4 relative'>
          {token ? (
            <div className='relative hidden md:block'>
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className='flex items-center gap-2 cursor-pointer'
              >
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="Profile" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown" />
              </div>

              {dropdownOpen && (
                <div className='absolute right-0 mt-2 min-w-48 bg-white rounded shadow-lg p-4 flex-col gap-4 z-20'>
                  <p
                    onClick={() => {
                      navigate('/my-profile');
                      setDropdownOpen(false);
                    }}
                    className="py-1 hover:text-blue-600 cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => {
                      navigate('/my-appointments');
                      setDropdownOpen(false);
                    }}
                    className="py-1 hover:text-blue-600 cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => {
                      setToken(false);
                      setDropdownOpen(false);
                    }}
                    className="py-1 hover:text-red-500 cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className='bg-blue-600 text-white px-4 py-2 rounded-full font-light hidden md:block'
            >
              Create account
            </button>
          )}

          {/* Mobile Menu Icon */}
          <img
            src={assets.menu_icon}
            alt="Menu"
            className="w-6 h-6 cursor-pointer md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 border-t shadow-lg">
          {links.map((path, index) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? 'block text-blue-600 font-semibold' : 'block text-gray-800'
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {labels[index]}
            </NavLink>
          ))}

          {!token && (
            <button
              onClick={() => {
                navigate('/login');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-blue-600 text-white py-2 rounded-md"
            >
              Create account
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
