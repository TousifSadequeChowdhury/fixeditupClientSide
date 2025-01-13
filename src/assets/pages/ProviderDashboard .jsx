import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const ProviderDashboard = () => {
    const { user } = useContext(AuthContext); // Access user from context
    const userE = user.email; // Get user email

    const [services, setServices] = useState([]);
    const [setError, error] = useState([]);

    useEffect(() => {
        // Log initial render
        console.log("Fetching services...");

       fetch("http://localhost:3000/api/cart")
            .then(response => response.json())
            .then(data => {
    
    const servicesArray = Array.isArray(data) ? data : (data.services || []);
                // Filter services based on user email, trimming and comparing case-insensitively
                const filteredServices = servicesArray.filter(service => 
                    service.proemail && 
                    service.proemail.trim().toLowerCase() === userE.trim().toLowerCase()
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

  // Function to handle status change
  const handleStatusChange = (itemId, newStatus) => {
    // Update the cartItems state with the new status

    console.log('Before update:', services);
    setServices((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item._id === itemId ? { ...item, status: newStatus } : item
      );
      console.log('After update:', updatedItems);
      return updatedItems;
    });
    
    // Send the updated status to the backend
    fetch(`http://localhost:3000/api/cart/${itemId}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update status.");
        }
      })
      .catch((error) => {
        console.error("Error updating status:", error);
        setError("Failed to update status. Please try again later.");
      });
  };
  return (
    <div className="container mx-auto p-6">
      {services.length === 0 ? (
        <p className="text-center text-gray-500">No cart items found.</p>
      ) : (
        <ul className="space-y-6">
          {services.map((item) => (
            <li
              key={item._id}
              className={`flex flex-col md:flex-row items-start justify-between bg-white border rounded-lg shadow-lg p-4 mb-4 ${item.status === 'pending' ? 'bg-green-100' : ''}`}
            >
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{item.serviceName}</h3>
                  <p className="text-sm text-gray-600">Description: {item.description}</p>
                  <p className="text-sm text-gray-600">Price: {item.price}</p>
                  <p className="text-sm text-gray-600">Area: {item.serviceArea}</p>
       
                </div>
              </div>
  
              {/* Editable status */}
              <div className="w-full md:w-auto">
                <label className="block text-sm text-gray-700">Status:</label>
                <select
                  value={item.status}
                  onChange={(e) => handleStatusChange(item._id, e.target.value)}
                  className="border p-2 rounded-md text-sm w-full md:w-32"
                >
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
  
  
};

export default ProviderDashboard;
