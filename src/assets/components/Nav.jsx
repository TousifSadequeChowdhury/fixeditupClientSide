import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar bg-[#3D405B] text-[#E07A5F]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li>
                <a>Dashboard</a>
                <ul className="p-2">
                <li><Link to="addservice">Add Service</Link></li>
                <li><Link to="manageservice">Manage Service</Link></li>
                <li><Link to="/dashboard/booked-services">Booked Services</Link></li>
                <li><Link to="/dashboard/service-to-do">Service To Do</Link></li> 
                </ul>
              </li>
              <li><a>Services</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">FIXEDITUP</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li>
              <details>
                <summary>Dashboard</summary>
                <ul className="p-2">
                <li><Link to="addservice">Add Service</Link></li>
                <li><Link to="manageservice">Manage Service</Link></li>
                <li><Link to="/dashboard/booked-services">Booked Services</Link></li>
                <li><Link to="/dashboard/service-to-do">Service To Do</Link></li> 
                </ul>
              </details>
            </li>
            <li><a>Services</a></li>
          </ul>
        </div>
        <div className="navbar-end">
       <Link to="/login" className='btn'>LogIn</Link>
        </div>
      </div>
    );
};

export default Nav;