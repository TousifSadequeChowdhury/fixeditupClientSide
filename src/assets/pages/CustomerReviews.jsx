import React from 'react';

const CustomerReviews = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-16 text-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Our Clients Speak</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Review 1 */}
          <div className="max-w-[200px] bg-white p-4 rounded-md shadow-md">
            <p className="text-gray-700 mb-2 text-sm">
              "The service was excellent! Quick and reliable. Highly recommended!"
            </p>
            <h3 className="font-medium text-sm text-blue-600">Rahim Ahmed</h3>
            <span className="text-xs text-gray-500">Dhaka Resident</span>
          </div>
  
          {/* Review 2 */}
          <div className="max-w-[200px] bg-white p-4 rounded-md shadow-md">
            <p className="text-gray-700 mb-2 text-sm">
              "Affordable and professional service. I’ll definitely call them again."
            </p>
            <h3 className="font-medium text-sm text-blue-600">Sumaiya Rahman</h3>
            <span className="text-xs text-gray-500">Chittagong Resident</span>
          </div>
  
          {/* Review 3 */}
          <div className="max-w-[200px] bg-white p-4 rounded-md shadow-md">
            <p className="text-gray-700 mb-2 text-sm">
              "They ensured every detail was perfect. Great experience!"
            </p>
            <h3 className="font-medium text-sm text-blue-600">Abdullah Hossain</h3>
            <span className="text-xs text-gray-500">Sylhet Resident</span>
          </div>
  
          {/* Review 4 */}
          <div className="max-w-[200px] bg-white p-4 rounded-md shadow-md">
            <p className="text-gray-700 mb-2 text-sm">
              "Quick and clean work! My house looks amazing now."
            </p>
            <h3 className="font-medium text-sm text-blue-600">Nusrat Jahan</h3>
            <span className="text-xs text-gray-500">Rajshahi Resident</span>
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default CustomerReviews;
