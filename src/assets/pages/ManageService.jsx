import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthProvider';

const ManageService = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [editService, setEditService] = useState(null);
  const [updatedService, setUpdatedService] = useState({
    serviceName: '',
    price: '',
    serviceArea: '',
    description: '',
    imageUrl: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch services with Axios
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get('https://fixed-it-up-server.vercel.app/api/services');
        setServices(data);
      } catch (err) {
        setError('Failed to fetch services.');
        console.error(err);
      }
    };

    fetchServices();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedService((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateService = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.put(`https://fixed-it-up-server.vercel.app/edit/${editService._id}`, updatedService);
      setServices((prevServices) =>
        prevServices.map((service) => (service._id === editService._id ? data : service))
      );
      setEditService(null);
    } catch (err) {
      setError('Failed to update service.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`https://fixed-it-up-server.vercel.app/api/items/${id}`);
      setServices((prevServices) => prevServices.filter((service) => service._id !== id));
    } catch (err) {
      setError('Failed to delete item.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <p>You need to log in first</p>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 mt-1">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Manage Services
        </h1>

        {/* Error Message */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Edit Service Dialog */}
        {editService && (
          <dialog id="edit-modal" className="modal">
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
          </dialog>
        )}

        {/* Services List */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
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
                    });
                    document.getElementById('edit-modal').showModal();
                  }}
                  className={`px-4 py-2 rounded-md text-white ${
                    user.email === service.email
                      ? 'bg-[#7695FF] hover:bg-[#6478E6]'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                  disabled={user.email !== service.email}
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
                  disabled={user.email !== service.email}
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
