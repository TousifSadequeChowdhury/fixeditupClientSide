import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthProvider';

const BookedServices = () => {
  const { user } = useContext(AuthContext);
  const userE = user?.email || ''; // Ensure user email is defined

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookedServices = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get('http://localhost:3000/api/cart');
        const data = response.data;

        // Ensure `data` is an array or convert it to one
        const servicesArray = Array.isArray(data) ? data : data.services || [];

        // Filter services by user email
        const filteredServices = servicesArray.filter(
          (service) =>
            service.userEmail &&
            service.userEmail.trim().toLowerCase() === userE.trim().toLowerCase()
        );

        setServices(filteredServices);
      } catch (err) {
        console.error('Error fetching booked services:', err);
        setError('Failed to fetch booked services. Please try again later.');
      } finally {
        setLoading(false); // Stop loading
      }
    };

    if (userE) fetchBookedServices();
  }, [userE]);

  if (loading) {
    return <p className="text-center text-gray-500 mt-10">Loading booked services...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Booked Services</h2>
      
      {services.length > 0 ? (
        services.map((service) => (
          <div key={service._id} className="bg-white border rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col space-y-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Service Name:</span> {service.serviceName}
              </p>
              <p className={`text-sm ${service.status === 'pending' ? 'text-green-600' : 'text-gray-600'}`}>
                <span className="font-semibold">Status:</span> {service.status}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">User Email:</span> {service.userEmail}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No services booked.</p>
      )}
    </div>
  );
};

export default BookedServices;
