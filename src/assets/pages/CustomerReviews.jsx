import React from 'react';

const CustomerReviews = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-16 text-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="overflow-hidden relative">
          <div className="flex space-x-8 animate-moveAcross">
            {/* Review 1 */}
            <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                "FixedItUp transformed my home! Professional service, affordable prices, and top-notch quality. Highly recommend!"
              </p>
              <h3 className="font-semibold text-lg text-blue-600">John Doe</h3>
              <span className="text-sm text-gray-500">Homeowner</span>
            </div>

            {/* Review 2 */}
            <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                "Fantastic experience! The team was on time, friendly, and completed the work quickly. Will definitely use their services again."
              </p>
              <h3 className="font-semibold text-lg text-blue-600">Jane Smith</h3>
              <span className="text-sm text-gray-500">Business Owner</span>
            </div>

            {/* Review 3 */}
            <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                "Great customer service! They made sure everything was done to perfection. Couldn’t ask for better results!"
              </p>
              <h3 className="font-semibold text-lg text-blue-600">Michael Williams</h3>
              <span className="text-sm text-gray-500">Apartment Owner</span>
            </div>

            {/* Review 4 */}
            <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                "I’m so happy with the work done by FixedItUp. My house looks amazing, and they completed the project in record time!"
              </p>
              <h3 className="font-semibold text-lg text-blue-600">Sarah Johnson</h3>
              <span className="text-sm text-gray-500">Homeowner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
