import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";

const Services = ({ service }) => {
  const { imageUrl, serviceName, description, price, serviceArea, ProviderImage, ProviderName, _id } = service;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // Passing service data to the details page via state
    navigate(`/services/${_id}`, {
      state: { service } // Send the entire service data
    });
  };

  return (
    <div className="card bg-base-100 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 h-[550px] flex flex-col">
      <img src={imageUrl} alt={serviceName} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="card-body p-4 flex flex-col flex-grow overflow-hidden">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-semibold text-gray-800">{serviceName}</h2>
          <div className="flex items-center space-x-1">
            <FaLocationDot className="text-gray-500" />
            <p className="text-sm text-gray-500">{serviceArea}</p>
          </div>
        </div>

        {/* Description with scroll or clipping */}
        <div className="text-gray-600 mt-2 overflow-auto h-[100px]">{description}</div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-green-500">Tk {price}</p>
        </div>
      </div>

      {/* Footer stays at the bottom */}
      <div className="card-footer flex justify-between items-center p-4 bg-base-200 rounded-b-lg mt-auto">
        <div className="flex items-center space-x-2">
          <img src={ProviderImage} alt={ProviderName} className="w-10 h-10 rounded-full border-2 border-gray-300" />
          <p className="text-sm font-semibold text-gray-700">{ProviderName}</p>
        </div>
        <button className="btn bg-black hover:bg-neutral border-none btn-primary px-4 py-2" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default Services;
