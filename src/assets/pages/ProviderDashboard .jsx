import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const ProviderDashboard = () => {
    const { user } = useContext(AuthContext); // Access user from context
    const userE = user?.email; // Get user email, ensuring it's safe to access

    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        if (!userE) return; // Skip fetch if user is not logged in

        console.log("Fetching services...");

        fetch("http://localhost:3000/api/cart")
            .then(response => response.json())
            .then(data => {
                const servicesArray = Array.isArray(data) ? data : (data.services || []);
                // Filter services based on user email
                const filteredServices = servicesArray.filter(service => 
                    service.proemail && 
                    service.proemail.trim().toLowerCase() === userE.trim().toLowerCase()
                );

                console.log('Filtered services:', filteredServices);

                // Set filtered services and stop loading
                setServices(filteredServices);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setError("Failed to fetch services. Please try again later.");
                setLoading(false); // Stop loading even if there's an error
            });
    }, [userE]); // Dependency on user email

    // Function to handle status change
    const handleStatusChange = (itemId, newStatus) => {
        setServices(prevItems => prevItems.map(item =>
            item._id === itemId ? { ...item, status: newStatus } : item
        ));

        // Send the updated status to the backend
        fetch(`http://localhost:3000/api/cart/${itemId}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: newStatus }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to update status.");
                }
            })
            .catch(error => {
                console.error("Error updating status:", error);
                setError("Failed to update status. Please try again later.");
            });
    };

    if (loading) {
        return <div className="text-center text-gray-500">Loading services...</div>; // Show loading state
    }

    return (
        <div className="container mx-auto p-6">
            {error && <p className="text-center text-red-500">{error}</p>} {/* Display error message */}
            {services.length === 0 ? (
                <p className="text-center text-gray-500">No cart items found.</p>
            ) : (
                <ul className="space-y-6">
                    {services.map((item) => (
                        <li
                            key={item._id}
                            className={`flex flex-col md:flex-row items-start justify-between bg-white border rounded-lg shadow-lg p-4 mb-4 ${item.status === 'pending' ? 'bg-yellow-100' : ''}`}
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
