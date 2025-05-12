import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
const navigate=useNavigate();
  const handleLogout = () => {
    navigate('/')
    setAToken(null);
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
  };

  return (
    <div className='flex justify-between items-center px-6 py-3 bg-blue-600 text-white shadow-md'>
      {/* Logo and role */}
      <div className='flex items-center gap-4'>
        <img src={assets.admin_logo} alt="Admin Logo" className='h-10 w-auto' />
        <p className='text-lg font-medium'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm font-semibold'
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
