import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const BookedServices = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email || '';

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookedServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://fixed-it-up-server.vercel.app/api/cart');
        const data = Array.isArray(response.data) ? response.data : response.data.services || [];
        const filteredServices = data.filter(
          (service) => service.userEmail?.trim().toLowerCase() === userEmail.trim().toLowerCase()
        );
        setServices(filteredServices);
      } catch (err) {
        console.error('Error fetching booked services:', err);
        setError('Failed to fetch booked services. Please try again later.');
        toast.error('You havent booked any services yet.');
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) fetchBookedServices();
  }, [userEmail]);

  if (loading) {
    return (
      <p className="text-center text-base-content mt-10" aria-live="polite">
        Loading booked services...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10" aria-live="assertive">
        {error}
      </p>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-base-content mb-6">Booked Services</h2>
      {services.length > 0 ? (
        services.map((service) => (
          <article
            key={service._id}
            className="bg-base-200 border border-base-300 rounded-lg shadow-md p-6 mb-6"
          >
            <div className="flex flex-col space-y-4">
              <p className="text-sm text-base-content">
                <span className="font-semibold">Service Name:</span> {service.serviceName}
              </p>
              <p
                className={`text-sm ${
                  service.status === 'pending' ? 'text-warning' : 'text-base-content'
                }`}
              >
                <span className="font-semibold">Status:</span> {service.status}
              </p>
              <p className="text-sm text-base-content">
                <span className="font-semibold">User Email:</span> {service.userEmail}
              </p>
            </div>
          </article>
        ))
      ) : (
        <p className="text-center text-base-content/60">No services booked.</p>
      )}
      <ToastContainer />
    </div>
  );
};

export default BookedServices;
