import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { HelmetProvider,Helmet } from 'react-helmet-async';

const UpdateApply = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams();
  console.log(id);
  const [apply, setMyApply] = useState({});
  console.log(apply);
  useEffect(() => {
    fetchMyApplyList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, id]);
  const fetchMyApplyList = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/myApply/${id}`
    );
    setMyApply(data);
  };
  console.log(apply.contactNumber);
  //   {
  //     "_id": "6780ba4cb8eef94d333e4c8c",
  //     "email": "wwwww@gg.com",
  //     "location": "Bogura",
  //     "distance": "3km",
  //     "contactNumber": "123456789",
  //     "title": "Md Rasel Mahmud",
  //     "startDate": "2025-01-08T15:30:09.731Z",
  //     "firstName": "korim",
  //     "lastName": "rohim",
  //     "additionalInfo": "i am korim and rohim",
  //     "marathonId": "677e9a19a2b61541673f5efd",
  //     "buyer": "wwwww@gg.com"
  // }
  const {
    _id,
    email,
    location,
    distance,
    contactNumber,
    title,
    startDate: stDate,
    firstName,
    lastName,
    additionalInfo,
    marathonId,
    buyer,
  } = apply;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    // const title1 = title;
    const startDate = stDate;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const additionalInfo = form.additionalInfo.value;
    const marathonId = _id;
    // const buyer = buyer?.email
    const myApplyData = {
      email,
      location,
      distance,
      contactNumber,
      title,
      startDate,
      firstName,
      lastName,
      additionalInfo,
      marathonId,
      buyer,
    };
    console.log(myApplyData);
    console.log(user);
    try {
      // 1. make a post request
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/updateMyApply/${id}`,
        myApplyData
      );
      // 2. Reset form
      form.reset()
      // 3. Show toast and navigate
      toast.success("My Marathon add Successful!!!");
      console.log(data);
      navigate('/dashboard/myApplyList')

      //   if (response.ok) {
      //     // Update registration count (you might need to fetch updated count from API)
      //     const updatedMarathon = {
      //       ...marathon,
      //       totalRegistrations: marathon.totalRegistrations + 1,
      //     };
      //     setMarathon(updatedMarathon);

      //     // Navigate to My Apply page
      //     navigate('/dashboard/my-apply');
      //   } else {
      //     console.error('Registration failed');
      //   }
    } catch (error) {
      console.error("Error registering for marathon:", error);
    }
  };

  return (
    // {
    //     "_id,": "67801a785da4149bdc744cd8",
    //     "email,": "wwwww@gg.com",
    //     "location,": "Chattogram",
    //     "distance,": "3km",
    //     "title,": "Md Rasel Mahmud",
    //     "startDate,": "2025-01-17T15:28:41.000Z",
    //     "firstName,": "rasel",
    //     "lastName,": "mah full",
    //     "additionalInfo,": "new apply added",
    //     "marathonId,": "677e99dda2b61541673f5ef6",
    //     "buyer,": "wwwww@gg.com"
    // }
    <form className="bg-orange-50 px-4 rounded-md" onSubmit={handleSubmit}>
      <HelmetProvider>
        <Helmet>
          <title>Update Apply</title>
        </Helmet>
      </HelmetProvider>      
      <div className="grid grid-cols-1 gap-6 mt-4">
        <p className="text-2xl">
          <strong>Marathon Title:</strong> {title} (Read Only)
        </p>
        <p>
          <strong>Start Date:</strong>{" "}
          {/* {mara_start && (
                <span className="text-gray-800 ">
                  {format(new Date(mara_start), "P")}
                </span>
              )} */}
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
            defaultValue={firstName}
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
            defaultValue={lastName}
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
            defaultValue={contactNumber}
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
          defaultValue={additionalInfo}
        ></textarea>
      </div>

      {/* <textarea
              name="additionalInfo"
              placeholder="Additional Info"
              // value={registrationData.additionalInfo}
              // onChange={handleChange}
            /> */}

      <div className="text-center py-5">
        <button className="btn btn-warning w w-full" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UpdateApply;
