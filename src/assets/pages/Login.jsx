import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              Login
            </h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7695FF]"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7695FF]"
                required
              />
              <button
                type="submit"
                className="w-full p-3 bg-[#7695FF] text-white rounded-md hover:bg-[#6478E6] focus:outline-none"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#7695FF] hover:underline">
              Sign Up
              </Link>
            </p>
          </div>
        </div>
      );
};

export default Login;