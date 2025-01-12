import React from "react";

const SectionTwo = () => {
  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-5">Event Highlights</h2>
      <p className="text-gray-600 mb-8">
        Take a look back at the memorable moments from our past marathons.
      </p>
      <div className="flex space-x-4 overflow-x-auto px-5">
        {/* Highlight 1 */}
        <div className="flex-shrink-0 bg-gray-100 rounded-lg shadow-md w-64 p-4">
          
          <h3 className="text-lg font-semibold">2023 Charity Run</h3>
          <p className="text-gray-600 text-sm">
            Raised $100K for education programs in local communities.
          </p>
        </div>

        {/* Highlight 2 */}
        <div className="flex-shrink-0 bg-gray-100 rounded-lg shadow-md w-64 p-4">
          
          <h3 className="text-lg font-semibold">2022 Record Breaker</h3>
          <p className="text-gray-600 text-sm">
            Celebrating the record-breaking completion time by Sarah Miller.
          </p>
        </div>

        {/* Highlight 3 */}
        <div className="flex-shrink-0 bg-gray-100 rounded-lg shadow-md w-64 p-4">
          
          <h3 className="text-lg font-semibold">The Ultimate Marathon</h3>
          <p className="text-gray-600 text-sm">
            The largest marathon in our history with 20,000+ participants!
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default SectionTwo;
