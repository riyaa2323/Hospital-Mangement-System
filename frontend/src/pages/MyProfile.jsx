import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Riya Singh',
    image: assets.profile_pic,
    email: 'riya1212@gmail.com',
    phone: '9876543210',
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Church Road, London',
    },
    gender: 'Female',
    dob: '2000-01-01',
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-10">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start">
        <img
          src={userData.image}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover shadow-md"
        />
      </div>

      {/* Right Side - Details */}
      <div className="flex-1">
        {isEdit ? (
          <>
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Name"
              className="border p-2 rounded w-full mb-2"
            />

            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              placeholder="Phone"
              className="border p-2 rounded w-full mb-2"
            />

            <input
              type="text"
              value={userData.address.line1}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))
              }
              placeholder="Address Line 1"
              className="border p-2 rounded w-full mb-2"
            />

            <input
              type="text"
              value={userData.address.line2}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value },
                }))
              }
              placeholder="Address Line 2"
              className="border p-2 rounded w-full mb-2"
            />

            <h2 className="text-lg font-semibold mt-4 mb-2">Basic Info</h2>

            <div className="mb-2">
              <label className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={userData.gender === 'Male'}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                />{' '}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={userData.gender === 'Female'}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                />{' '}
                Female
              </label>
            </div>

            <input
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              className="border p-2 rounded w-full mb-2"
            />
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold mb-2">{userData.name}</h1>
            <p className="mb-1">📞 {userData.phone}</p>
            <p className="mb-1">🏠 {userData.address.line1}</p>
            <p className="mb-1">{userData.address.line2}</p>

            <h2 className="text-lg font-semibold mt-4 mb-2">Basic Info</h2>
            <p className="mb-1">👤 Gender: {userData.gender}</p>
            <p className="mb-1">🎂 DOB: {userData.dob}</p>
          </>
        )}

        <button
          onClick={() => setIsEdit(!isEdit)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEdit ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
