import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import axios from "axios";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import toast from "react-hot-toast";
import { HelmetProvider,Helmet } from "react-helmet-async";


const AddMarathons = () => {
    const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const [startDate, setStartDate] = useState(new Date())
  const [createdAt, setCreatedAt] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [mara_startDate, setMara_startDate] = useState(new Date())
  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const title = form.marathon_title.value
    const email = form.email.value
    const startReg = startDate
    const endReg = endDate
    const mara_start = mara_startDate
    const distance = form.distance.value
    const location = form.location.value
    // const min_price = parseFloat(form.min_price.value)
    // const max_price = parseFloat(form.max_price.value)
    const photo = form.imageUrl.value
    const description = form.description.value
    console.log(title,email);
    const formData = {
      title,
      buyer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      startReg,endReg,mara_start,
      distance,
      location,
      photo,
      createdAt,
      description,
      mara_count: 0,
    }
    // const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-mara`, formData)
    // console.log(data);
    try {
      // 1. make a post request
      await axios.post(`${import.meta.env.VITE_API_URL}/add-mara`, formData)
      // console.log(data);
      // 2. Reset form
      form.reset()
      // 3. Show toast and navigate
      toast.success('Marathon Added Successfully!!!')
      navigate('/dashboard/myMarathonList')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }
  // console.log(data);
  return (
    <div className="flex justify-center items-center my-12 w-full ">
            <HelmetProvider>
              <Helmet>
                <title>Dashboard | Add Marathon</title>
              </Helmet>
            </HelmetProvider>

      <div className=' p-12 w-[90%] mx-auto bg-[#F4F3F0] rounded-md shadow-md '>
        <h2 className="text-3xl pb-5 font-bold text-gray-700 capitalize text-center">
          Post a Marathons
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Marathon Title
              </label>
              <input
                id="marathon_title"
                name="marathon_title"
                placeholder="Enter Title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled={true}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Start Registration Date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">End Registration Date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Marathon Start Date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={mara_startDate}
                onChange={(date) => setMara_startDate(date)}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Running Distance
              </label>
              <select
                name="distance"
                id="distance"
                defaultValue={'Running Distance'}
                className="border p-2 rounded-md"
              >
                <option disabled>
                Distance
            </option>
                <option value="25km">25km</option>
                <option value="10km">10km</option>
                <option value="3km">3km</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Location
              </label>
              <select
                name="location"
                id="location"
                defaultValue={'Location'}
                className="border p-2 rounded-md"
              >
                <option disabled>
                Location
            </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Bogura">Bogura</option>
              </select>
            </div>
            {/* <div>
              <label className="text-gray-700 " htmlFor="min_price">
                Minimum Price
              </label>
              <input
                id="min_price"
                name="min_price"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div> */}

            {/* <div>
              <label className="text-gray-700 " htmlFor="max_price">
                Maximum Price
              </label>
              <input
                id="max_price"
                name="max_price"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div> */}
            {/* Image URL */}
        <div className="">
          <label className="" >
            Marathon Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="photo"
            // value={formData?.imageUrl}
            // onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            required
          />
        </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMarathons;
