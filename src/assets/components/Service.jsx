import { useEffect, useState } from 'react';
import axios from 'axios';
import Services from './Services';
import { IoIosSearch } from "react-icons/io";

const Service = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/services?search=${search}`)
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => console.error('Error fetching services:', error));
  }, [search]);

  return (
    <>
      {/* Search Input */}
      <div className="flex justify-center my-6 px-4 sm:px-0">
        <div className="relative w-full max-w-2xl">
          <input
            onKeyUp={(e) => setSearch(e.target.value)}
            type="text"
            className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search service by name"
          />
          <IoIosSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4 sm:mx-8 my-4">
        {
          services.map(service => (
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <Services
                key={service._id}
                service={service}
              />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Service;
