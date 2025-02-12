import axios from "axios";
import React, { useEffect, useState } from "react";
// import { formatDate } from "react-datepicker/dist/date_utils";
import { Link, useNavigate } from "react-router-dom";
import { format } from 'date-fns'
import { HelmetProvider,Helmet } from 'react-helmet-async';

const Marathons = () => {
  const [marathons, setMarathons] = useState([]);
  const navigate = useNavigate()
  const [sort, setSort] = useState('')
  useEffect(() => {
    fetchAllData();
  }, []);
  const fetchAllData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/add-mara?sort=${sort}`
    );
    setMarathons(data);
  };
  return (
    <div className="dark:bg-gray-900 dark:text-white/60">
      <HelmetProvider>
        <Helmet>
          <title>Marathons</title>
        </Helmet>
      </HelmetProvider>      
      <div className="flex justify-between items-center">
        <div><b>Total Marathons:</b> {marathons.length}pcs</div>
      <div>
            <select
              name='category'
              id='category'
              onChange={e => setSort(e.target.value)}
              className='border p-4 rounded-md dark:bg-gray-900 dark:text-white/60'
              value={sort}
            >
              <option value=''>Sort By Created At</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
      </div>
      {/* <Link
        // to={`/job/1`}
        className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-light text-gray-800 ">
            Deadline: 28/05/2024
          </span>
          <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full ">
            Web Development
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
            E-commerce Website Development
          </h1>

          <p className="mt-2 text-sm text-gray-600 ">
            Dramatically redefine bleeding-edge infrastructures after
            client-focused value. Intrinsicly seize user-centric partnerships
            through out-of-the-box architectures. Distinctively.
          </p>
          <p className="mt-2 text-sm font-bold text-gray-600 ">
            Range: $500 - $600
          </p>
          <p className="mt-2 text-sm font-bold text-gray-600 ">Total Bids: 0</p>
        </div>
      </Link> */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">All Marathons</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marathons.map((marathon, i) => (
            <div
              key={i}
              className=" dark:bg-gray-900 dark:text-white/60 bg-white shadow-md  w-full h-[32rem] overflow-hidden hover:shadow-lg transition-shadow duration-200"
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
                {marathon.mara_start && <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Event Start:</span>{" "}
                  {format(new Date(marathon?.mara_start), "PP")}
                  {/* {marathon?.createdAt} */}
                </p>}
                {marathon.createdAt && <p className="text-gray-600 mb-2">
                  <span className="font-semibold">createdAt:</span>{" "}
                  {format(new Date(marathon?.createdAt), "PP")}
                  {/* {marathon?.createdAt} */}
                </p>}
                <button
                  onClick={() => navigate(`/marathons/${marathon._id}`)}
                  className="mt-3 px-4 py-2 dark:bg-[#ff5722]/50 dark:text-white/60 dark:hover:bg-[#ec3c06]/50 bg-[#ff5722] hover:bg-[#ec3c06] text-white rounded-lg transition-colors"
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

export default Marathons;
