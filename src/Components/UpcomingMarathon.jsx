import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { format } from "date-fns";
import SectionTitle from "./SectionTitle";

const UpcomingMarathon = () => {
  const [marathons, setMarathons] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetchMarathonHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchMarathonHome = async () => {
    const { data } = await axiosSecure.get(`/marathonForHome`);
    setMarathons(data);
  };
  return (
    <section className=" text-center pt-10">
      <SectionTitle heading="Upcoming Marathons"></SectionTitle>
      {/* <h2 className="text-3xl font-bold py-7">Upcoming Marathons</h2> */}
      <div className="grid grid-cols-3 gap-3">
        {marathons.length > 0 ? (
          marathons.map((marathon,i) => (
            <div key={i} className="dark:bg-gray-900 dark:text-white/60 bg-white border border-gray-300 p-5 space-y-3 shadow-md text-left transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1">
              <h3 className="text-lg font-bold mb-2">{marathon.title}</h3>
              <p>📍 Location: {marathon.location}</p>
              <p>
                📅 Event Date:{" "}
                {format(new Date(marathon.mara_start), "PP")}
                {/* {new Date(marathon.eventDate).toLocaleDateString()} */}
              </p>
              <p>
                🕒 Registration Deadline:{" "}
                {format(new Date(marathon.startReg), "PP")} -{" "}
                {format(new Date(marathon.endReg), "PP")}
                {/* {new Date(marathon.registrationDeadline).toLocaleDateString()} */}
              </p>
              <div className="text-left py-3">
              <button className="mt-3 px-4 py-2 btn dark:bg-[#ff5722]/50 dark:text-white/60 dark:hover:bg-[#ec3c06]/50 bg-[#ff5722] hover:bg-[#ec3c06] text-white rounded-lg"
                onClick={() =>
                  (window.location.href = `/marathons/${marathon._id}`)
                }
              >
                See Details
              </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading upcoming marathons...</p>
        )}
      </div>
    </section>
  );
};

export default UpcomingMarathon;
