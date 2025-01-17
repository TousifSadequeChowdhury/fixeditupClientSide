import React, { useState, useEffect, useContext } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const loginUserEmail = user?.email || 'email@example.com';
  const addednotify = () => toast.success("Service added to cart successfully!");
  const errorNotify = () => toast.error("Failed to add service to cart.");

  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [service, setService] = useState(state?.service || null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    serviceId: id,
    serviceName: service?.serviceName || '',
    serviceImage: service?.imageUrl || '',
    providerName: service?.ProviderName || '',
    userEmail: loginUserEmail,
    userName: user?.displayName || 'Current User',
    serviceDate: '',
    specialInstructions: '',
    price: service?.price || '',
  });

  const { imageUrl, serviceName, description, price, serviceArea, ProviderImage, ProviderName, email } = service || {};

  useEffect(() => {
    if (!service) {
      const fetchServiceDetails = async () => {
        try {
          const response = await axios.get(`/api/services/${id}`);
          setService(response.data);
        } catch (error) {
          console.error('Error fetching service details:', error);
        }
      };
      fetchServiceDetails();
    }
  }, [id, service]);

  const handleBookNow = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePurchase = async () => {
    const serviceToAdd = {
      serviceId: id,
      serviceName,
      price,
      serviceArea,
      proemail: email,
      userEmail: loginUserEmail,
      status: 'pending',
    };

    try {
      await axios.post('https://fixed-it-up-server.vercel.app/api/cart', serviceToAdd);
      addednotify();
      handleModalClose();
    } catch (error) {
      console.error('Error adding service to cart:', error);
      errorNotify();
    }
  };

  if (!service) {
    return <p className="text-center text-base-content mt-10">Loading service details...</p>;
  }

  return (
    <div className="container mx-auto my-10 p-6 bg-base-100 rounded-lg shadow-lg mt-24">
      <div className="mb-10 flex items-center space-x-4">
        <img
          src={ProviderImage}
          alt={ProviderName}
          className="w-16 h-16 rounded-full border-2 border-base-300"
        />
        <div>
          <h2 className="text-xl font-semibold text-base-content">{ProviderName}</h2>
          <p className="text-base-content/70">{serviceArea}</p>
        </div>
      </div>

      <div className="bg-base-200 p-6 rounded-lg">
        <img
          src={imageUrl}
          alt={serviceName}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-semibold text-base-content">{serviceName}</h1>
        <p className="text-base-content/70 mt-4">{description}</p>
        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src={ProviderImage}
              alt={ProviderName}
              className="w-12 h-12 rounded-full border-2 border-base-300"
            />
            <div>
              <p className="text-lg font-semibold text-base-content">{ProviderName}</p>
            </div>
          </div>
          <p className="text-lg font-bold text-green-600">Tk {price}</p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-focus transition duration-300"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-base-300 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-base-100 rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold text-base-content mb-4">Book Your Service</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm text-base-content">Service Date</label>
                <input
                  type="date"
                  name="serviceDate"
                  value={userData.serviceDate}
                  onChange={handleInputChange}
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-base-content">Special Instructions</label>
                <textarea
                  name="specialInstructions"
                  value={userData.specialInstructions}
                  onChange={handleInputChange}
                  className="mt-2 p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <button
                  type="button"
                  onClick={handlePurchase}
                  className="bg-green-600 text-white py-2 px-6 rounded-lg w-full"
                >
                  Purchase
                </button>
              </div>
            </form>
            <button
              className="text-red-500 mt-4 w-full"
              onClick={handleModalClose}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ServiceDetails;
