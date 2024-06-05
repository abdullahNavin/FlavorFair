import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../Context/ContextProvider';

const Deshbord = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.displayName);
    return (
        <div className='h-screen bg-[url("/src/assets/deshbo2.jpg")] bg-cover bg-center backdrop-filter brightness-[.8]'>
            <Navbar></Navbar>
            <div className='grid grid-cols-11 gap-3 h-[80vh] mt-8 px-5'>
                <div className='bg-[#00000078] h-full col-span-2 py-3 rounded'>
                    <div className='text-white flex flex-col items-center justify-center my-6'>
                        <div className='h-[100px] w-[100px]'>
                            <img className='rounded-full ring-2 ring-white h-full w-full' src={user?.photoURL} alt="" />
                        </div>
                        <p className='text-xl text-center my-4'>{user.displayName}</p>
                    </div>
                    <div className='mt-7 flex flex-col p-4 gap-4'>
                        <Link to={'/Deshbord'}>
                            <button className='bg-[#ffffff9e] text-xl font-bold py-1 px-3 rounded-full w-full'>My Recipes</button>
                        </Link>
                        <Link to={'/Deshbord/AddR'}>
                            <button className='bg-[#ffffff9e] text-xl font-bold py-1 px-3 rounded-full w-full'>Add Recipes</button>
                        </Link>
                        <Link to={'/Deshbord/BuyR'}>
                            <button className='bg-[#ffffff9e] text-xl font-bold py-1 px-3 rounded-full w-full'>My Buy Recipes</button>
                        </Link>
                        <Link to={'/Deshbord/SellR'}>
                            <button className='bg-[#ffffff9e] text-xl font-bold py-1 px-3 rounded-full w-full'>My Sell Recipes</button>
                        </Link>
                    </div>
                </div>
                <div className='col-span-9 h-full bg-[#00000090] rounded p-4 overflow-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Deshbord;