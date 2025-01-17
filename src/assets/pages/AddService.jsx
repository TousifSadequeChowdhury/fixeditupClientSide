import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddService = () => {
  const { user } = useContext(AuthContext);

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
      email: user?.email,
      ProviderName: user?.displayName,
      ProviderImage: user?.photoURL,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://fixed-it-up-server.vercel.app/api/data', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Service added successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  };

  return user ? (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="bg-base-100 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-base-content mb-6">
          Add Service
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Image URL */}
          <input
            type="url"
            name="imageUrl"
            placeholder="Image URL of the Service"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full p-3 border border-base-300 rounded-md text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />

          {/* Service Name */}
          <input
            type="text"
            name="serviceName"
            placeholder="Service Name"
            value={formData.serviceName}
            onChange={handleChange}
            className="w-full p-3 border border-base-300 rounded-md text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />

          {/* Price */}
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 border border-base-300 rounded-md text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />

          {/* Service Area */}
          <input
            type="text"
            name="serviceArea"
            placeholder="Service Area"
            value={formData.serviceArea}
            onChange={handleChange}
            className="w-full p-3 border border-base-300 rounded-md text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-base-300 rounded-md text-base-content focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
            required
          />

          {/* Add Button */}
          <button
            type="submit"
            className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary-focus focus:outline-none"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <h1 className="text-4xl font-bold text-primary mb-4">Login Required</h1>
      <p className="text-lg text-base-content/70 mb-6 text-center">
        You need to log in first before adding a service. Please log in to continue.
      </p>
      <Link
        to="/login"
        className="btn bg-primary text-white hover:bg-primary-focus rounded-lg px-8 py-3 transition duration-300 ease-in-out"
      >
        Login to Add Service
      </Link>
    </div>
  );
};

export default AddService;
