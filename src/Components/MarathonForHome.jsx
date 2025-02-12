import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import SectionTitle from "./SectionTitle";

const MarathonForHome = () => {
  const axiosSecure = useAxiosSecure();
  const [marathons, setMarathons] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchMarathonHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchMarathonHome = async () => {
    const { data } = await axiosSecure.get(`/marathonForHome`);
    setMarathons(data);
  };
  return (
    <div className="pt-10">
      {/* <div className="flex justify-between items-center">
        <div>
          <b>Total Marathons:</b> {marathons.length}pcs
        </div>
      </div> */}

      <div>
        <SectionTitle
          heading="All Marathons"
          // subHeading="*****"
        ></SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marathons.map((marathon, i) => (
            <div
              key={i}
              className=" dark:bg-gray-900 dark:text-white/60 w-full h-[32rem] bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={marathon.photo}
                alt={marathon.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{marathon.title}</h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Location:</span>{" "}
                  {marathon?.location}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Registration:</span>{" "}
                  {format(new Date(marathon.startReg), "PP")} -{" "}
                  {format(new Date(marathon.endReg), "PP")}
                </p>
                {marathon.mara_start && (
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Event Start:</span>{" "}
                    {format(new Date(marathon?.mara_start), "PP")}
                    {/* {marathon?.createdAt} */}
                  </p>
                )}{" "}
                {marathon.createdAt && (
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">createdAt:</span>{" "}
                    {format(new Date(marathon?.createdAt), "PP")}
                    {/* {marathon?.createdAt} */}
                  </p>
                )}
                <button
                  onClick={() => navigate(`/marathons/${marathon._id}`)}
                  className="mt-3 px-4 py-2 btn dark:bg-[#ff5722]/50 dark:text-white/60 dark:hover:bg-[#ec3c06]/50 bg-[#ff5722] hover:bg-[#ec3c06] text-white rounded-lg"
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarathonForHome;
