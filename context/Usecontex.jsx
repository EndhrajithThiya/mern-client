import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContent = createContext();

export const AppContextProvider = ({ children }) => {
  const backend = import.meta.env.VITE_BAKEND_SERVER_URL;
  const [isLoggedin, setIsloggedin] = useState(false);
  const [userData, setUserData] = useState(false); // use null or {} instead of false
  const getUserData = async () => {
  try {
    const { data } = await axios.get(backend + '/api/user/data',);

    if (data.success && data.userData) {
      setUserData(data.userData); // This must be valid
    } else {
      toast.error(data.message || 'Failed to load user data');
    }
  } catch (error) {
    toast.error(error.response?.data?.message || error.message || 'Something went wrong');
  }
};


  const value = {
    backend,
    isLoggedin,
    setIsloggedin,
    userData,
    setUserData,getUserData
  };

  return (
    <AppContent.Provider value={value}>
      {children}
    </AppContent.Provider>
  );
};
