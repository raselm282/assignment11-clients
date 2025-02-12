import React from "react";
import SectionTitle from "./SectionTitle";

const SectionOne = () => {
  return (
    <section className="text-center pt-10">
      <SectionTitle heading="Top Marathon Stories" subHeading="Discover the inspiring journeys of runners who have gone the extra mile."></SectionTitle>
      {/* <h2 className="text-3xl font-bold mb-5">Top Marathon Stories</h2>
      <p className="text-gray-600 mb-8">
        Discover the inspiring journeys of runners who have gone the extra mile.
      </p> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
        {/* Story 1 */}
        <div className="bg-white border p-5 shadow-md dark:bg-gray-900 dark:text-white/60">
          
          <h3 className="text-xl font-semibold">John Doe's Journey</h3>
          <p className="text-gray-600 my-3 text-sm">
            From a couch potato to a marathon finisher, John shares his 2-year
            journey of perseverance and passion.
          </p>
          
        </div>

        {/* Story 2 */}
        <div className="bg-white border p-5 shadow-md dark:bg-gray-900 dark:text-white/60">
          
          <h3 className="text-xl font-semibold">Jane's Transformation</h3>
          <p className="text-gray-600 my-3 text-sm">
            Jane shares her inspiring story of how she completed her first
            marathon after a life-changing event.
          </p>
          
        </div>

        {/* Story 3 */}
        <div className="bg-white border dark:bg-gray-900 dark:text-white/60 p-5 shadow-md dark:bg-gray-900 dark:text-white/60">
          
          <h3 className="text-xl font-semibold">The Fastest Runner: Mike</h3>
          <p className="text-gray-600 my-3 text-sm">
            Mike shares how he broke records in his marathon debut and achieved
            his dream.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
