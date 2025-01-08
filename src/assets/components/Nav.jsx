import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import { MdLogout } from "react-icons/md";
import { auth } from '../../firebase.config';
import { signOut } from 'firebase/auth';

const Nav = () => {

  const { user } = useContext(AuthContext); // Access user and logOut function
//   const handleLogOut = async () => {
//     try {
//         await logOut();
//     } catch (error) {
//         console.error("Logout failed:", error.message);
//     }
// };
// if(!user){
//   console.log("no user")
// }
// else{
//   console.log(user.photoURL)


// }

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
              <li><a href="/">Home</a></li>
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
            <li><a href="/">Home</a></li>
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
        <div className="navbar-end flex items-center">
       
        {user ? (
        <div className="flex items-center space-x-4">
          {/* Display user photo and name */}
          <img 
            src={user.photoURL || 'default-avatar.png'} 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full object-cover" 
          />
          <span className="text-xl font-semibold text-gray-500">{user.displayName || 'Username'}</span>
          <MdLogout onClick={handleLogout} className="w-6 h-6 text-gray-500 hover:text-red-500" />
          </div>
      ) : (
        <Link to="/login" className="bg-[#E07A5F] text-[#3D405B] hover:bg-[#e07b5fb2] rounded px-2 py-1">
          Login
        </Link>
      )}
       
        </div>
      </div>
    );
};

export default Nav;