import React from "react";
import SectionTitle from "./SectionTitle";

const SectionTwo = () => {
  return (
    <section className="py-10 text-center">
      <SectionTitle heading="Event Highlights" subHeading="Take a look back at the memorable moments from our past marathons."></SectionTitle>
      {/* <h2 className="text-3xl font-bold mb-5">Event Highlights</h2> */}
      {/* <p className="text-gray-600 mb-8">
        Take a look back at the memorable moments from our past marathons.
      </p> */}
      <div className="flex space-x-4 overflow-x-auto">
        {/* Highlight 1 */}
        <div className="bg-white border p-5 shadow-md dark:bg-gray-900 dark:text-white/60">
          
          <h3 className="text-xl font-semibold">2023 Charity Run</h3>
          <p className="text-gray-600 my-3 text-sm">
            Raised $100K for education programs in local communities.
          </p>
        </div>
        {/* <div className="bg-white border rounded-lg p-5 shadow-md">
          
          <h3 className="text-xl font-semibold">Jane's Transformation</h3>
          <p className="text-gray-600 my-3 text-sm">
            Jane shares her inspiring story of how she completed her first
            marathon after a life-changing event.
          </p>
          
        </div> */}

        {/* Highlight 2 */}
        <div className="bg-white border p-5 shadow-md dark:bg-gray-900 dark:text-white/60">
          
          <h3 className="text-xl font-semibold">2022 Record Breaker</h3>
          <p className="text-gray-600 my-3 text-sm">
            Celebrating the record-breaking completion time by Sarah Miller.
          </p>
        </div>

        {/* Highlight 3 */}
        <div className="bg-white border p-5 shadow-md dark:bg-gray-900 dark:text-white/60">
          
          <h3 className="text-xl font-semibold">The Ultimate Marathon</h3>
          <p className="text-gray-600 my-3 text-sm">
            The largest marathon in our history with 20,000+ participants!
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default SectionTwo;
