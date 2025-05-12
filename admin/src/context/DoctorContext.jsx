import { createContext } from 'react';

export const DoctorContext = createContext();

const DoctorContextProvider = ({ children }) => {
  const value = {}; // Add shared doctor-related state or methods here

  return (
    <DoctorContext.Provider value={value}>
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
