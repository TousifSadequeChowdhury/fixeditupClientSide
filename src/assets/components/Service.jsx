import { useEffect, useState } from 'react';
import Services from './Services';
import ManageService from '../pages/ManageService';
import { IoIosSearch } from "react-icons/io";

const Service = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
     fetch(`http://localhost:3000/api/services?search=${search}`)
    .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data);
              setServices(data);
    })
    .catch(error => console.error('Error fetching services:', error));
  }, [search]);

  return (
    <>
<div className="flex justify-center my-6">
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
    <div className='grid grid-cols-3  w-auto mx-8 my-4 gap-y-10'>
       {
        services.map(service => (
            <Services
            key={service._id}
            service={service}
            />
        ))
       }
    </div>
    </>
  );
};

export default Service;
