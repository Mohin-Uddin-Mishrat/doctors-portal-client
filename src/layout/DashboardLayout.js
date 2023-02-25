import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-6 ">
                    <Outlet></Outlet>  
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                       
                        <li className='text-black font-bold' ><Link to='/dashboard' >My Appoinments</Link></li>
                        <li className='text-black font-bold'><Link to='/dashboard/allusers' >All Users </Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;