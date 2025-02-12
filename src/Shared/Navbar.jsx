import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import logo from '../../src/assets/image/logo_marathon.png'
import { MdDarkMode} from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { user,signOutUser } = useContext(AuthContext)
  const handleSignOut = ()=>{
    signOutUser()
    .then(()=>{
        alert('success');
    })
    .catch(error =>{
    }
    )
}

    const links = <>
    <li><NavLink className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-[#ec3c06] ${
                isActive ? "bg-[#ef714b] text-white" : "text-Black"
              } focus:outline-none focus:ring focus:ring-[#ec3c06] focus:bg-[#ef714b]`
            } to={'/'}>Home</NavLink></li>
    <li><NavLink className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-[#ec3c06] ${
                isActive ? "bg-[#ef714b] text-white" : "text-Black"
              } focus:outline-none focus:bg-[#ef714b]`
            } to={'/marathons'}>Marathons</NavLink></li>
    {user && <><li><NavLink className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-[#ec3c06] ${
                isActive ? "bg-[#ef714b] text-white" : "text-Black"
              } focus:outline-none focus:bg-[#ef714b]`
            } to={'/dashboard'}>Dashboard</NavLink></li></>}
    
    </>

const [isDarkMode, setIsDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

const toggleTheme = () => {
  setIsDarkMode((prevMode) => {
    const newMode = !prevMode;
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    return newMode;
  });
};

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [isDarkMode]);



  return (
    <div className="sticky left-0 top-0 py-2  backdrop-blur-md w-full z-50 dark:bg-black/50 bg-gradient-to-r from-[#f8ac95]/50 to-[#ff5722]/50 mx-auto dark:text-white/60">
    {/* <div className="sticky top-0 w-full z-50 bg-gradient-to-t from-[#f8ac95] to-[#ff5722] py-2"> */}
      <div className="navbar max-w-[90%] mx-auto p-0">
      <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="gap-3 menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow font-bold text-xl"
          >
            {links}
          </ul>
        </div>
        {/* <p>{user?.email}</p> */}
        <Link to='/' className='flex gap-2 items-center ring p-2 rounded-sm ring-[#ec3c06]'>
          <img className='w-auto h-7' src={logo} alt='logo' />
          <span className='font-bold text-xl'>Marathons</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 z-50 font-bold text-xl">
        {links}
        </ul>
      </div>
      <div className="navbar-end">
      {
            user? <><img src={user.photoURL} className="w-14 h-14 rounded-full mr-3" alt="" /> <button onClick={handleSignOut} className="btn">Logout</button></> : <><Link  className="mr-4 text-teal-500 btn" to={"/register"}>Register</Link>
        <Link  to={"/login"} className="btn">Sign In</Link></>
        }
        {/* <Link to={'/login'} className="btn">Login</Link>
        <Link to={'/register'} className="btn">Register</Link> */}
      </div>
    </div>
    <button
          onClick={toggleTheme}
          className="p-3 text-2xl  rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
        >
          {isDarkMode ? <MdLightMode/> : <MdDarkMode/>}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
