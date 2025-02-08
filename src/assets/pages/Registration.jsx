import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  const { registerUser, setUser, googleLogin } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photoURL = form.get("photoURL");

    try {
      // Register the user with email and password
      const result = await registerUser(email, password);
      const user = result.user;

      // Update the user state
      setUser({ ...user, displayName: name, photoURL });
      console.log("User created:", user);
    } catch (error) {
      console.error("Error creating user:", error.message, error.code);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      console.log("Logged in with Google successfully!");
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-base-200 p-8 rounded-lg shadow-lg w-96">
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
            className="bg-base-100 w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
            required
          />
          
          {/* Email Field */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="bg-base-100 w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
            required
          />

          {/* Password Field */}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="bg-base-100 w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
            required
          />

          {/* Photo URL Field */}
          <input
            type="url"
            name="photoURL"
            id="photoURL"
            placeholder="Photo URL (Optional)"
            className="bg-base-100 w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D405B]"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-[#3D405B] text-white rounded-md hover:bg-[#343750] focus:outline-none"
          >
            Register
          </button>
        </form>

        <div className="mt-4">
        <button
  onClick={handleGoogleLogin}
  className="w-full p-3 border border-gray-300 rounded-md flex items-center justify-center hover:border-gray-400 focus:outline-none FLEX gap-3"
>
<FcGoogle />
  <span className="text-gray-700 font-medium">
    Sign in with Google
  </span>
</button>
        </div>

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
