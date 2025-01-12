import React, { useContext } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";

// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import toast from "react-hot-toast";
import MarathonCountdown from "../Components/MarathonCountdown";
import { HelmetProvider,Helmet } from 'react-helmet-async';


const MarathonsDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams();
  console.log(id);
  const [job, setJob] = useState({});
  console.log(job);
  useEffect(() => {
    fetchJobData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchJobData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/add-mara/${id}`
    );
    setJob(data);
    setStartDate(new Date(data?.mara_start));
  };
  const {
    title,
    buyer,
    startReg,
    endReg,
    mara_start,
    distance,
    location,
    photo,
    description,
    mara_count,
    _id
  } = job || {};
  console.log(job);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    // const title1 = title;
    const startDate = mara_start;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const contactNumber = form.contactNumber.value;
    const additionalInfo = form.additionalInfo.value;
    const marathonId = _id
    // const buyer = buyer?.email
    const marathonData = {
      email,
      location,
      distance,
      contactNumber,
      title : title,
      startDate,
      firstName,
      lastName,
      additionalInfo,
      marathonId,
      buyer : buyer?.email
    };
    console.log(marathonData);
    console.log(user);
    try {
      // 1. make a post request
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/addMarathon`,
        marathonData
      )
      // 2. Reset form
      form.reset()
      // 3. Show toast and navigate
      toast.success('My Marathon add Successful!!!')
      console.log(data)
      navigate('/dashboard/myApplyList')

      //   if (response.ok) {
      //     // Update registration count (you might need to fetch updated count from API)
      //     const updatedMarathon = {
      //       ...marathon,
      //       totalRegistrations: marathon.totalRegistrations + 1,
      //     };
      //     setMarathon(updatedMarathon);

          // Navigate to My Apply page
          // navigate('/dashboard/my-apply');
      //   } else {
      //     console.error('Registration failed');
      //   }
    } catch (error) {
      console.error("Error registering for marathon:", error);
    }
  };

  return (
    // <div>mara</div>
    <div className="grid grid-cols-1 md:grid-cols-2 justify-around gap-5  min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
            <HelmetProvider>
              <Helmet>
                <title>Marathon Details</title>
              </Helmet>
            </HelmetProvider>
      {/* Job Details */}
      
      <div className="flex-1 p-4  bg-orange-50 rounded-md shadow-md md:min-h-[350px]">
        <div className="flex items-center justify-between">
          {mara_start && (
            <span className="text-sm font-light text-gray-800 ">
              Marathon Start: {format(new Date(mara_start), "P")}
            </span>
          )}
          <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
            {location}
          </span>
        </div>

        <div className="flex">
        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {title}
          </h1>

          <p className="mt-2 text-lg text-gray-600 ">{description}</p>
          <p className="mt-6 text-sm font-bold text-gray-600 ">
            Buyer Details:
          </p>
          <div className="flex items-center gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600 ">
                Name: {buyer?.name}
              </p>
              <p className="mt-2 text-sm  text-gray-600 ">
                Email: {buyer?.email}
              </p>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-14 h-14">
              <img src={buyer?.photo} alt="" />
            </div>
          </div>
          <p className="mt-6 text-lg font-bold text-gray-600 ">
            {startReg && (
              <span>
                Reg Start & End: {format(new Date(startReg), "P")} -
                {format(new Date(endReg), "P")}
              </span>
            )}
          </p>
        </div>
        <MarathonCountdown startDate={startDate}></MarathonCountdown>
        </div>
        <div className="text-center py-7">
          <button
            onClick={() => navigate(`/marathons/${marathon._id}`)}
            className="btn text-center mt-3 px-4 py-2 btn-warning text-black rounded-lg  transition-colors"
          >
            Register Now
          </button>
        </div>
      </div>
      {/* Place A Bid Form */}
      <form className="bg-orange-50 px-4 rounded-md" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4">
        <p className="text-2xl">
          <strong>Marathon Title:</strong> {title} (Read Only)
        </p>
        <p>
          <strong>Start Date:</strong>{" "}
          {mara_start && (
            <span className="text-gray-800 ">
              {format(new Date(mara_start), "P")}
            </span>
          )}
        </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 " htmlFor="email">
              <b>Email</b>
            </label>
            <input
              id="email"
              name="email"
              placeholder="Enter Email"
              type="email"
              value={user ? user.email : ""}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 " htmlFor="email">
              <b>First Name</b>
            </label>
            <input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              type="text"
              // value={user ? user.email : ""}
              // readOnly
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 " htmlFor="email">
              <b>Last Name</b>
            </label>
            <input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              type="text"
              // value={user ? user.email : ""}
              // readOnly
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 " htmlFor="contactNumber">
              <b>Contact Number</b>
            </label>
            <input
              id="contactNumber"
              name="contactNumber"
              placeholder="Contact Number"
              type="text"
              // value={user ? user.email : ""}
              // readOnly
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-gray-700 " htmlFor="additionalInfo">
            Additional Info
          </label>
          <textarea
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            name="additionalInfo"
            id="additionalInfo"
          ></textarea>
        </div>

        {/* <textarea
          name="additionalInfo"
          placeholder="Additional Info"
          // value={registrationData.additionalInfo}
          // onChange={handleChange}
        /> */}
        
        <div className="text-center py-5">
        <button className="btn btn-warning w w-full" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MarathonsDetails;
//  <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
//         <h2 className="text-lg font-semibold text-gray-700 capitalize ">
//           Place A Bid
//         </h2>

//         <form>
//           <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
//             <div>
//               <label className="text-gray-700 " htmlFor="price">
//                 Price
//               </label>
//               <input
//                 id="price"
//                 type="text"
//                 name="price"
//                 required
//                 className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
//               />
//             </div>

//             <div>
//               <label className="text-gray-700 " htmlFor="emailAddress">
//                 Email Address
//               </label>
//               <input
//                 id="emailAddress"
//                 type="email"
//                 name="email"
//                 disabled
//                 className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
//               />
//             </div>

//             <div>
//               <label className="text-gray-700 " htmlFor="comment">
//                 Comment
//               </label>
//               <input
//                 id="comment"
//                 name="comment"
//                 type="text"
//                 className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
//               />
//             </div>
//             <div className="flex flex-col gap-2 ">
//               <label className="text-gray-700">Deadline</label>

//               <DatePicker
//                 className="border p-2 rounded-md"
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date)}
//               />
//             </div>
//           </div>

//           <div className="flex justify-end mt-6">
//             <button
//               type="submit"
//               className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//             >
//               Place Bid
//             </button>
//           </div>
//         </form>
//       </section>
