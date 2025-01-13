import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';

const ManageService = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [editService, setEditService] = useState(null); // State for editing service
  const [updatedService, setUpdatedService] = useState({
    serviceName: '',
    price: '',
    serviceArea: '',
    description: '',
    imageUrl: ''
  });
  const [items, setItems] = useState([]);
  // console.log("User Display Name:", user.email);
  // console.log("Updated Service User:", updatedService.user);
  
  // Fetch services from API
  useEffect(() => {
    fetch('http://localhost:3000/api/services')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setServices(data);

      })
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  // Handle input change for editing service
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedService((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Update service on submit
  const handleUpdateService = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/edit/${editService._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedService),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Updated service:', data);
        setServices(services.map(service => (service._id === editService._id ? data : service)));
        setEditService(null);
      })
      .catch(error => console.error('Error updating service:', error));
  };

  const deleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'DELETE', // Specify the HTTP method as DELETE
      });

      if (response.ok) {
        // If the deletion is successful, update the state by filtering out the deleted item
        setItems((prevItems) => prevItems.filter((item) => item._id !== id));
      } else {
        console.error('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  if (!user) {
    return <p>You need to Log In first</p>; // Or handle this state as needed
  }
  return (
    <>
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Manage Services
          </h1>

          {/* Edit Service Form */}
          <dialog id="my_modal_1" className="modal">
            {editService && (
              <form onSubmit={handleUpdateService} className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl font-semibold mb-4">Edit Service</h2>
                <div className="mb-4">
                  <label className="block text-gray-700">Service Name</label>
                  <input
                    type="text"
                    name="serviceName"
                    value={updatedService.serviceName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={updatedService.price}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Service Area</label>
                  <input
                    type="text"
                    name="serviceArea"
                    value={updatedService.serviceArea}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Description</label>
                  <textarea
                    name="description"
                    value={updatedService.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Image URL</label>
                  <input
                    type="text"
                    name="imageUrl"
                    value={updatedService.imageUrl}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-[#7695FF] text-white rounded-md hover:bg-[#6478E6]"
                >
                  Update Service
                </button>
              </form>
            )}
          </dialog>

          {/* Services List */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map(service => (
              <div key={String(service._id)} className="bg-white rounded-lg shadow p-4">
                <img
                  src={service.imageUrl}
                  alt={service.serviceName}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service.serviceName}</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Price:</strong> ${service.price}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Service Area:</strong> {service.serviceArea}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Description:</strong> {service.description}
                </p>
                <div className="flex space-x-4">
                <button
  onClick={() => {
    setEditService(service);
    setUpdatedService({
      serviceName: service.serviceName,
      price: service.price,
      serviceArea: service.serviceArea,
      description: service.description,
      imageUrl: service.imageUrl,
      user: service.user, // Set the user field from the service object
    });
    document.getElementById('my_modal_1').showModal();
  }}
  className={`px-4 py-2 rounded-md text-white ${
    user.email === service.email
      ? 'bg-[#7695FF] hover:bg-[#6478E6]'
      : 'bg-gray-300 cursor-not-allowed'
  }`}
  disabled={user.email !== service.email} // Compare directly with service.user
>
  Edit
</button>
<button
  onClick={() => deleteItem(service._id)}
  className={`px-4 py-2 rounded-md text-white ${
    user.email === service.email
      ? 'bg-red-500 hover:bg-red-600'
      : 'bg-gray-300 cursor-not-allowed'
  }`}
  disabled={user.email !== service.email} // Compare directly with service.user
>
  Delete
</button>

                </div>
              </div>
            ))}
          </div>
        </div>

    </>
  );
};

export default ManageService;
