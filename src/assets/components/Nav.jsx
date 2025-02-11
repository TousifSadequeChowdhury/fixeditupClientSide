import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { MdLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";
import logo from "../img/fixedituplogo.png";

const Nav = () => {
  const { user } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        Navigate("/login");
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  const getFirstName = (name) => name?.split(" ")[0] || "User";

  return (
    <div className="navbar bg-[#3D405B] text-[#E07A5F] fixed w-full px-6 py-3 shadow-md z-50">
      {/* Left - Logo */}
      <div className="navbar-start">
        <Link to="/">
          <img src={logo} alt="Logo"   className="h-8 w-auto sm:h-10 lg:h-12 lg:w-auto" 
 />
        </Link>
      </div>

      {/* Center - Desktop Menu */}
      <div className="hidden lg:flex navbar-center">
        <ul className="menu menu-horizontal space-x-6 text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          {user && (
            <li className="relative group">
              <details>
                <summary className="cursor-pointer">Dashboard</summary>
                <ul className="p-2 bg-base-100 rounded shadow">
                  <li>
                    <Link to="/addservice">Add Service</Link>
                  </li>
                  <li>
                    <Link to="/manageservice">Manage Service</Link>
                  </li>
                  <li>
                    <Link to="/bookedservices">Booked Services</Link>
                  </li>
                  <li>
                    <Link to="/servicetodo">Service To Do</Link>
                  </li>
                </ul>
              </details>
            </li>
          )}
        </ul>
      </div>

      {/* Right - Profile & Theme Toggle */}
      <div className="navbar-end flex items-center space-x-4">
        {/* Theme Toggle */}
        <label className="swap">
          <input type="checkbox" className="toggle" checked={theme === "dark"} onChange={handleToggle} />
        </label>

        {/* Profile & Logout for Large Screens */}
        {user ? (
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#E07A5F]"
                />
              ) : (
                <FaUserCircle className="w-10 h-10 text-[#E07A5F]" />
              )}
              <span className="text-lg font-semibold text-gray-200">{getFirstName(user.displayName)}</span>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-200 hover:text-red-500 p-2 rounded-full transition-all duration-200 hover:bg-[#E07A5F]"
            >
              <MdLogout className="w-6 h-6" />
            </button>
          </div>
        ) : (
          <Link to="/login" className="bg-[#E07A5F] text-[#3D405B] hover:bg-[#e07b5fb2] rounded px-4 py-2">
            Login
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden btn btn-ghost btn-circle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile & Tablet Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-6 bg-base-200 shadow-md rounded-md w-52 p-4 z-50">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>

              {/* Dashboard Dropdown (For SM & MD) */}
              {user && (
                <li className="relative">
                  <details>
                    <summary className="cursor-pointer p-2 bg-gray-100 rounded">Dashboard</summary>
                    <ul className="p-2 bg-gray-50 rounded shadow mt-2">
                      <li>
                        <Link to="/addservice">Add Service</Link>
                      </li>
                      <li>
                        <Link to="/manageservice">Manage Service</Link>
                      </li>
                      <li>
                        <Link to="/bookedservices">Booked Services</Link>
                      </li>
                      <li>
                        <Link to="/servicetodo">Service To Do</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              )}

              {/* Profile & Logout */}
              {user ? (
                <li className="border-t pt-3">
                  <div className="flex items-center gap-3">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="Avatar" className="w-10 h-10 rounded-full" />
                    ) : (
                      <FaUserCircle className="w-10 h-10 text-gray-300" />
                    )}
                    <span className="font-semibold">{getFirstName(user.displayName)}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="mt-3 w-full flex items-center gap-2 p-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    <MdLogout className="w-5 h-5" /> Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="block text-center bg-[#E07A5F] text-white px-4 py-2 rounded">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
