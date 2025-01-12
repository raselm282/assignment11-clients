import React from 'react';
import { HelmetProvider,Helmet } from 'react-helmet-async';
import { Link, NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex gap-5 flex-col md:flex-row'>
        <HelmetProvider>
            <Helmet>
            <title>Dashboard</title>
            </Helmet>
        </HelmetProvider>            
            <div className='w-[20%]'>
                <ul className="menu bg-base-200 rounded-box w-56">
                    <li><NavLink to={'addMarathons'}>Add Marathons</NavLink></li>
                    <li><NavLink to={'myMarathonList'}>My Marathons List</NavLink></li>
                    <li><NavLink to={'myApplyList'}>My Apply List</NavLink></li>
                </ul>
            </div>
            <div className='w-[80%] pb-10'><Outlet></Outlet></div>
        </div>
    );
};

export default DashBoard;