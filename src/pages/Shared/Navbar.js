import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Context';

const Navbar = () => {
    const { logout, user } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch((er) => console.log(er.messege));

    }

    const pages = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appoinment'>Appoinment</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/'>Reviews</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        {
            user?.uid ? <li onClick={handleLogout}><Link to=''>SighnOut</Link></li> : <li><Link to='/login'>login</Link></li>
        }
    </>



    return (
        <div>
            <div className="navbar bg-accent rounded ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {pages}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Dr. Mishrat</a>
                </div>
                <div className="navbar-center hidden lg:flex justify-around">
                    <ul className="menu menu-horizontal px-1">
                        {pages}
                    </ul>
                </div>
                <label  htmlFor="dashboard" tabIndex={0} className="btn btn-ghost ml-24 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;