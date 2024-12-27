import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../AuthProvider';

const Registration = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   photoURL: '',
  // });

  const { registerUser, setUser } = useContext(AuthContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photourl = form.get("photourl");
    try {
      // Register the user with email and password
      const result = await registerUser(email, password);
      const user = result.user;
      // Update the user's profile with their name
      // await updateProfile(user, { displayName: name,photoURL:photourl });

      // Refresh the user state to reflect the updated profile
      setUser({ ...user, displayName: name });
      console.log("User created:", user);
    } catch (error) {
      console.error("Error creating user:", error.message, error.code);
    }
    // console.log({name,email,password,photourl})
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
            required
          />
          
          {/* Email Field */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
            required
          />

          {/* Password Field */}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
            required
          />

          {/* Photo URL Field */}
          <input
            type="url"
            name="photoURL"
            id="photoURL"
            placeholder="Photo URL"
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-[#3D405B] text-white rounded-md hover:bg-[#343750] focus:outline-none"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#3D405B] hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
