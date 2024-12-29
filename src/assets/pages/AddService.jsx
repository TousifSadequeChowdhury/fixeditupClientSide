import React, { useState } from 'react';

const AddService = () => {
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
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product added:', formData);
  
      fetch("http://localhost:3000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to add movie");
          }
          return res.json();
        })
        .then((formData) => {
          console.log("Movie added successfully:", formData);
          // toast.success("Movie added successfully!"); // Success message
        })
        .catch((error) => {
          console.error("Error:", error.message);
          // toast.error("Failed to add movie. Please try again."); // Error message
        });
    
  
  };
  
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
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
      );
};

export default AddService;


