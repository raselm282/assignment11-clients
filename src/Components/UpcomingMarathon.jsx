import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { format } from "date-fns";

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
  console.log(marathons);
  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold py-7">Upcoming Marathons</h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {marathons.length > 0 ? (
          marathons.map((marathon) => (
            <div className="bg-white border border-gray-300 rounded-lg w-72 p-5 shadow-md text-left transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1">
              <h3>{marathon.title}</h3>
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
              <div className="text-center py-3">
              <button className="btn btn-xs btn-warning"
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
