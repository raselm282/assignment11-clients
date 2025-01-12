// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useAuth from './useAuth';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  })
  const useAxiosSecure = ()=>{
    const navigate = useNavigate()
    const {signOutUser} = useAuth()
    useEffect(()=>{
      axiosSecure.interceptors.response.use(res => {
        return res
      },async error =>{
        console.log('error caught from axios interceptor-->',error.response);
        if(error.response.status === 401 || error.response.status === 403){
          //logout punishment
          signOutUser()
          //navigate to login page
          navigate('/login')
  
        }
      })
    },[signOutUser,navigate])
    return axiosSecure
  }
// const useAxiosSecure = () => {
//     const navigate = useNavigate()
//   const { signOutUser } = useAuth()
//   useEffect(() => {
//     axiosSecure.interceptors.response.use(
//       res => {
//         return res
//       },
//       async error => {
//         console.log(
//           'error caught from our very own axios interceptor-->',
//           error.response
//         )
//         if (error.response.status === 401 || error.response.status === 403) {
//           // signOutUser
//           signOutUser()
//           // navigate to login
//           navigate('/login')
//         }
//       }
//     )
//   }, [signOutUser, navigate])
//   return axiosSecure
// };

export default useAxiosSecure;