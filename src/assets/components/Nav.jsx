import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import { MdLogout } from "react-icons/md";
import { auth } from '../../firebase.config';
import { signOut } from 'firebase/auth';

const Nav = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        Navigate("/login"); // Redirect to the login page
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  return (
    <div className="navbar bg-[#3D405B] text-[#E07A5F] z-10">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <li><a href="/">Home</a></li>
            <li>
              {user && (
                <details>
                  <summary>Dashboard</summary>
                  <ul className="p-2">
                    <li><Link to="addservice">Add Service</Link></li>
                    <li><Link to="manageservice">Manage Service</Link></li>
                    <li><Link to="/bookedservices">Booked Services</Link></li>
                    <li><Link to="/servicetodo">Service To Do</Link></li>
                  </ul>
                </details>
              )}
            </li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>
        <Link to="/services">
          <a className="btn btn-ghost text-xl">FIXEDITUP</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">Home</a></li>
          <li><Link to="/services">Services</Link></li>
          <li>
            {user && (
              <details>
                <summary>Dashboard</summary>
                <ul className="p-2">
                  <li><Link to="addservice">Add Service</Link></li>
                  <li><Link to="manageservice">Manage Service</Link></li>
                  <li><Link to="/bookedservices">Booked Services</Link></li>
                  <li><Link to="/servicetodo">Service To Do</Link></li>
                </ul>
              </details>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        {user ? (
          <div className="flex items-center space-x-4">
            {/* User Profile Section */}
            <div className="flex items-center space-x-2">
              <img
                src={user.photoURL || 'default-avatar.png'}
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#E07A5F]" />
              <span className="text-lg font-semibold text-gray-200">{user.displayName || 'Username'}</span>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="text-gray-200 hover:text-red-500 p-2 rounded-full transition-all duration-200 hover:bg-[#E07A5F]">
              <MdLogout className="w-6 h-6" />
            </button>
          </div>
        ) : (
          <Link to="/login" className="bg-[#E07A5F] text-[#3D405B] hover:bg-[#e07b5fb2] rounded px-4 py-2">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
