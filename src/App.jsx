// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Regsiter from '../pages/Regsiter';
import Resetpassword from '../pages/Resetpassword';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div><ToastContainer  position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Regsiter />} />
        <Route path="/rest" element={<Resetpassword />} />
      </Routes>

      {/* Toast Container should be globally present */}
      
    </div>
  );
};

export default App;
