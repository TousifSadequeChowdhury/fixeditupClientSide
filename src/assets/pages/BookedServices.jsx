import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';

const BookedServices = () => {
    const { user } = useContext(AuthContext); // Access user from context
    const userE = user.email; // Get user email
    console.log('User email:', userE);

    const [services, setServices] = useState([]);
    
    useEffect(() => {
        // Log initial render
        console.log("Fetching services...");

       fetch("http://localhost:3000/api/cart")
            .then(response => response.json())
            .then(data => {
                // Log the full fetched data structure to inspect it
                console.log("Fetched data before filtering:", data);

                // Check if data is an array or an object and handle it properly
                const servicesArray = Array.isArray(data) ? data : (data.services || []);
                console.log('Services Array:', servicesArray);

                // Filter services based on user email, trimming and comparing case-insensitively
                const filteredServices = servicesArray.filter(service => 
                    service.userEmail && 
                    service.userEmail.trim().toLowerCase() === userE.trim().toLowerCase()
                );
                

                // Log filtered services
                console.log('Filtered services:', filteredServices);
                
                // Update state if filtered services are found
                if (filteredServices.length > 0) {
                    setServices(filteredServices);
                } else {
                    console.log('No services found for this user');
                }
            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    }, [userE]);

    return (
        <div className="container mx-auto p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Booked Services</h2>
          
          {services.length > 0 ? (
            services.map((service) => (
              <div key={service._id} className="bg-white border rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col space-y-4">
                  <p className="text-sm text-gray-600"><span className="font-semibold">Service Name:</span> {service.serviceName}</p>
                  <p className={`text-sm ${service.status === 'pending' ? 'text-green-600' : 'text-gray-600'}`}>
                    <span className="font-semibold">Status:</span> {service.status}
                  </p>
                  <p className="text-sm text-gray-600"><span className="font-semibold">User Email:</span> {service.userEmail}</p>
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
