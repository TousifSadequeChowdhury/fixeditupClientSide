import { useEffect, useState } from 'react';
import Services from './Services';
import ManageService from '../pages/ManageService';

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
     fetch('http://localhost:3000/api/services')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data);
              setServices(data);
    })
    .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
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
  );
};

export default Service;
