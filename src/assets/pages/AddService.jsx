import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

const AddService = () => {
    const { user } = useContext(AuthContext); // Access user and logOut function
  
    const [formData, setFormData] = useState({
      imageUrl: '',
      serviceName: '',
      price: '',
      serviceArea: '',
      description: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
        email: user.email,
        ProviderName: user.displayName,
        ProviderImage: user.photoURL,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log('Product added:', formData);
    
      axios
        .post('https://fixed-it-up-server.vercel.app/api/data', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log('Service added successfully:', response.data);
          // toast.success("Service added successfully!"); // Success message
        })
        .catch((error) => {
          console.error('Error:', error.message);
          // toast.error("Failed to add service. Please try again."); // Error message
        });

      console.log(user);
    };
    
    return (
      user ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              Add Service
            </h2>
            <h1>{user.email || 'email'}</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Image URL */}
              <input
                type="url"
                name="imageUrl"
                placeholder="Image URL of the Service"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7695FF]"
                required
              />

              {/* Service Name */}
              <input
                type="text"
                name="serviceName"
                placeholder="Service Name"
                value={formData.serviceName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7695FF]"
                required
              />

              {/* Price */}
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7695FF]"
                required
              />

              {/* Service Area */}
              <input
                type="text"
                name="serviceArea"
                placeholder="Service Area"
                value={formData.serviceArea}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7695FF]"
                required
              />

              {/* Description */}
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7695FF] h-32 resize-none"
                required
              />

              {/* Add Button */}
              <button
                type="submit"
                className="w-full p-3 bg-[#3D405B] text-white rounded-md hover:bg-[#343750] focus:outline-none"
              >
                Add Service
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-6 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Login Required</h1>
          <p className="text-lg text-gray-600 mb-6 text-center">
            You need to log in first before adding a service. Please log in to continue.
          </p>
          <Link
            to="/login"
            className="btn bg-blue-500 text-white hover:bg-blue-600 rounded-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login to Add Service
          </Link>
        </div>
      )
    );
};

export default AddService;
