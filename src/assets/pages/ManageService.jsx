import React, { useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([
      {
        id: 1,
        imageUrl: 'https://via.placeholder.com/150',
        serviceName: 'Service 1',
        price: 100,
        serviceArea: 'Area 1',
        description: 'Description for Service 1',
      },
      {
        id: 2,
        imageUrl: 'https://via.placeholder.com/150',
        serviceName: 'Service 2',
        price: 200,
        serviceArea: 'Area 2',
        description: 'Description for Service 2',
      },
    ]);
  

    const [editService, setEditService] = useState(null);
    const [deleteServiceId, setDeleteServiceId] = useState(null);
  
    const handleUpdateService = (e) => {
      e.preventDefault();
      setServices((prevServices) =>
        prevServices.map((service) =>
          service.id === editService.id ? editService : service
        )
      );
      setEditService(null);
    };
  
    const handleDeleteService = () => {
      setServices((prevServices) =>
        prevServices.filter((service) => service.id !== deleteServiceId)
      );
      setDeleteServiceId(null);
    };
    return (
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Manage Services
          </h1>
    
          {/* Services List */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow p-4">
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
                    onClick={() => setEditService(service)}
                    className="px-4 py-2 bg-[#7695FF] text-white rounded-md hover:bg-[#6478E6]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setDeleteServiceId(service.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
    
          {/* Edit Service Modal */}
          {editService && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Edit Service
                </h2>
                <form className="space-y-4" onSubmit={handleUpdateService}>
                  <input
                    type="url"
                    name="imageUrl"
                    placeholder="Image URL"
                    value={editService.imageUrl}
                    onChange={(e) =>
                      setEditService({ ...editService, imageUrl: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7695FF]"
                    required
                  />
                  <input
                    type="text"
                    name="serviceName"
                    placeholder="Service Name"
                    value={editService.serviceName}
                    onChange={(e) =>
                      setEditService({ ...editService, serviceName: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7695FF]"
                    required
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={editService.price}
                    onChange={(e) =>
                      setEditService({ ...editService, price: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7695FF]"
                    required
                  />
                  <input
                    type="text"
                    name="serviceArea"
                    placeholder="Service Area"
                    value={editService.serviceArea}
                    onChange={(e) =>
                      setEditService({ ...editService, serviceArea: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7695FF]"
                    required
                  />
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={editService.description}
                    onChange={(e) =>
                      setEditService({ ...editService, description: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7695FF] h-32 resize-none"
                    required
                  />
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setEditService(null)}
                      className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#7695FF] text-white rounded-md hover:bg-[#6478E6]"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
    
          {/* Delete Confirmation Modal */}
          {deleteServiceId && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Confirm Deletion
                </h2>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete this service? This action cannot
                  be undone.
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setDeleteServiceId(null)}
                    className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteService}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
};

export default ManageService;