import React from 'react';
import PropTypes from 'prop-types';

const Services = ({service}) => {
    const {description,imageUrl,price,serviceArea,serviceName,_id,
      ProviderImage,ProviderName}=service;
      return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <img src={imageUrl} alt={serviceName} className="w-full h-64 object-cover rounded-t-lg" />
          <div className="card-body">
            <h2 className="card-title text-2xl font-semibold text-gray-800">{serviceName}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-bold text-green-500">{price}</p>
              <p className="text-sm text-gray-500">{serviceArea}</p>
            </div>
          </div>
          <div className="card-footer flex justify-between items-center p-4 bg-base-200 rounded-b-lg">
            <div className="flex items-center space-x-2">
              <img src={ProviderImage} alt={ProviderName} className="w-10 h-10 rounded-full border-2 border-gray-300" />
              <p className="text-sm font-semibold text-gray-700">{ProviderName}</p>
            </div>
            <button className="btn btn-primary px-4 py-2">Get Service</button>
          </div>
        </div>
      );
      
      
};
Services.propTypes = {
  service: PropTypes.object.isRequired,
    
  }


export default Services;