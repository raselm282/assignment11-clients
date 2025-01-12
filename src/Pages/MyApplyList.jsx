import React, { useContext, useEffect, useState } from "react";
// import useAxiosSecure from '../Hooks/useAxiosSecure';
import AuthContext from "../context/AuthContext/AuthContext";
import axios from "axios";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { HelmetProvider,Helmet } from 'react-helmet-async';
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyApplyList = () => {
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
  const [myApply, setMyApply] = useState([]);
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetchMyApplyList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user,search]);
  const fetchMyApplyList = async () => {
    const { data } = await axiosSecure.get(
      `/myApplyList/${user?.email}?search=${search}`
    )
    setMyApply(data);
  };
  
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/myApplyDel/${id}`
      );
      toast.success("Data Deleted Successfully!!!");
      fetchMyApplyList();
    } catch (err) {
      toast.error(err.message);
    }
  };
  const modernDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className="gap-2 flex">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };
  const handleEdit = (id)=>{
    navigate(`/updateApply/${id}`)
  }
  const modernEdit = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className="gap-2 flex">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleEdit(id);
            }}
          >
            Yes to Edit
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };
  return (
    <section className="container px-4 mx-auto">
      <HelmetProvider>
        <Helmet>
          <title>Dashboard | My Apply List</title>
        </Helmet>
      </HelmetProvider>      
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-900 ">My Marathon</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {myApply.length}
          </span>
        </div>
        <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Enter Job Title"
            aria-label="Enter Job Title"
          />

          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Marathon Start</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Location</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Distance
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Description
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Delete/Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {/* Generate dynamic tr */}
                  {myApply.map((apply) => (
                    <tr key={apply._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {apply.title}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {format(new Date(apply.startDate), "P")}
                      </td>

                      <td
                        className={`px-4 py-4 text-sm text-gray-500  whitespace-nowrap ${
                          apply.location === "Chattogram" && "text-orange-500 "
                        } ${apply.location === "Dhaka" && "text-green-500 "}
                            ${apply.location === "Bogura" && "text-red-500 "}`}
                      >
                        {apply.location}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className={`px-3 py-1  ${
                              apply.distance === "25km" &&
                              "text-blue-500 bg-blue-100/60"
                            } ${
                              apply.distance === "10km" &&
                              "text-green-500 bg-green-100/60"
                            }
                            ${
                              apply.distance === "3km" &&
                              "text-red-500 bg-red-100/60"
                            } text-xs  rounded-full`}
                          >
                            {apply.distance}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {apply.additionalInfo.substring(0, 18)}...
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={() => modernDelete(apply._id)}
                            // onClick={() => handleDelete(apply._id)}
                            className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>

                          <Link
                          onClick={()=> modernEdit(apply._id)}
                            // to={`/updateApply/${apply._id}`}
                            className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyApplyList;
