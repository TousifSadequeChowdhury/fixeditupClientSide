import React from 'react';
import PropTypes from 'prop-types';

const Services = ({service}) => {
    const {description,imageUrl,price,serviceArea,serviceName,_id}=service;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
      
        <img src={imageUrl}alt="" />
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};
Services.propTypes = {
  service: PropTypes.object.isRequired,
    
  }


export default Services;