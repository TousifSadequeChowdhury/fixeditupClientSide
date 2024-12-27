import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../../AuthProvider';


const Login = () => {
  const { googleLogin, userLogin, setUser } = useContext(AuthContext); // Use googleLogin from context

  // const handleGoogleLogin = () => {
  //   googleLogin(); // Trigger Google login
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    userLogin(email.value, password.value)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch((error) => {
        alert(error.code);
      });
    
  };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              Login
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                  id="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
                required
              />
              <input
                type="password"
                  id="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
                required
              />
              <button
                type="submit"
                className="w-full p-3 bg-[#3D405B] text-white rounded-md hover:bg-[#343750] focus:outline-none"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Don't have an account?{' '}
              <Link to="/registration" className="text-[#3D405B] hover:underline">
              Sign Up
              </Link>
            </p>
          </div>
        </div>
      );
};

export default Login;