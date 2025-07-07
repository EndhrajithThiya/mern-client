import React, { useContext } from 'react'
import { assets } from '../src/assets/assets.js'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/Usecontex.jsx'
const Nav = () => {
    const navigate = useNavigate()
    const{userData} = useContext(AppContent);

  return (
     <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-4xl w-full flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4"> Hi {userData ? userData.name :"Welcome to ProAuth"}</h1>
          <p className="text-gray-600 mb-6">
            Secure login and authentication platform for professionals and organizations.
          </p>
          <button onClick={()=>{ navigate("/reg")}} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl transition">
            Login
          </button>
        </div>
        <div className="md:w-1/2">
          <img className='w-full rounded-[50%]'
            src={assets.Logo}
            alt="Authentication illustration"
            
          />
        </div>
      </div>
    </div>
  )
}

export default Nav