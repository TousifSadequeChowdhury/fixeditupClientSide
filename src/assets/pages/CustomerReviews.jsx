import React from 'react';

const CustomerReviews = () => {
  return (
    <section id="testimonials" className="bg-base-200 py-16 text-base-content">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Our Clients Speak</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Review 1 */}
          <div className="max-w-[200px] bg-base-100 p-4 rounded-md shadow-md">
            <p className="text-base-content/70 mb-2 text-sm">
              "The service was excellent! Quick and reliable. Highly recommended!"
            </p>
            <h3 className="font-medium text-sm text-primary">Rahim Ahmed</h3>
            <span className="text-xs text-base-content/50">Dhaka Resident</span>
          </div>

          {/* Review 2 */}
          <div className="max-w-[200px] bg-base-100 p-4 rounded-md shadow-md">
            <p className="text-base-content/70 mb-2 text-sm">
              "Affordable and professional service. I’ll definitely call them again."
            </p>
            <h3 className="font-medium text-sm text-primary">Tashfia Chowdhury</h3>
            <span className="text-xs text-base-content/50">Rangpur Resident</span>
          </div>

          {/* Review 3 */}
          <div className="max-w-[200px] bg-base-100 p-4 rounded-md shadow-md">
            <p className="text-base-content/70 mb-2 text-sm">
              "They ensured every detail was perfect. Great experience!"
            </p>
            <h3 className="font-medium text-sm text-primary">Abdullah Hossain</h3>
            <span className="text-xs text-base-content/50">Sylhet Resident</span>
          </div>

          {/* Review 4 */}
          <div className="max-w-[200px] bg-base-100 p-4 rounded-md shadow-md">
            <p className="text-base-content/70 mb-2 text-sm">
              "Quick and clean work! My house looks amazing now."
            </p>
            <h3 className="font-medium text-sm text-primary">Nusrat Jahan</h3>
            <span className="text-xs text-base-content/50">Rajshahi Resident</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
