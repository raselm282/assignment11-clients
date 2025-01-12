import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import logo from '../../src/assets/image/logo_marathon.png'

const Navbar = () => {
  const { user,signOutUser } = useContext(AuthContext)
  const handleSignOut = ()=>{
    signOutUser()
    .then(()=>{
        alert('success');
        console.log('success');
    })
    .catch(error =>{
        console.log(error.message);
    }
    )
}

    const links = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/marathons'}>Marathons</NavLink></li>
    {user && <><li><NavLink to={'/dashboard'}>Dashboard</NavLink></li></>}
    
    </>
    console.log(user);
  return (
    <div className="navbar bg-base-100">
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
            className="gap-3 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* <p>{user?.email}</p> */}
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='' />
          <span className='font-bold'>Marathons</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
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
  );
};

export default Navbar;
