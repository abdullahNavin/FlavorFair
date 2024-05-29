import React from 'react';
import Headroom from 'react-headroom';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
        <li className='text-xl font-bold'><NavLink to={'/'}>Home</NavLink></li>
        <li className='text-xl font-bold'><NavLink to={'/recipes'}>Recipes</NavLink></li>
        <li className='text-xl font-bold'><NavLink to={'/deshbord'}>Deshbord</NavLink></li>
    </>
    return (
        <Headroom>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <div>
                        <Link to={'/'}>
                            <img className='w-3/6' src="/src/assets/assignment11-removebg-preview.png" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </Headroom>
    );
};

export default Navbar;