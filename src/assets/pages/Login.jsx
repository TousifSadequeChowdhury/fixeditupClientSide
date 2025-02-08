import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the system preference for dark mode
  useEffect(() => {
    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkModePreference);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    userLogin(email.value, password.value)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-base-200 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={`${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-base-100 border-gray-300 text-gray-700'} w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D405B]`}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={`${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-base-100 border-gray-300 text-gray-700'} w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D405B]`}
            required
          />
          <button
            type="submit"
            className={`${isDarkMode ? 'bg-[#3D405B] hover:bg-[#343750]' : 'bg-[#3D405B] hover:bg-[#343750]'} w-full p-3 text-white rounded-md focus:outline-none`}
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/registration" className={`${isDarkMode ? 'text-[#A0B0B9]' : 'text-[#3D405B]'} hover:underline`}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
