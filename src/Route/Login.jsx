import React from 'react';
import { FcGoogle } from "react-icons/fc";
import Navbar from '../Components/Navbar';
import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init()

const Login = () => {
    return (
        <div className='h-screen bg-[url("/src/assets/Login.jpg")] bg-cover bg-center'>
            <Navbar></Navbar>
            <div className='h-full w-full flex justify-center items-center'>
                <div data-aos="fade-up" data-aos-duration="1000" className='bg-[#00000081] w-1/2 p-5'>
                    <h1 className='text-3xl font-bold text-center text-white my-3'>Login</h1>
                    <form>
                        <div className='flex flex-col justify-center items-center text-white'>
                            <div className='flex flex-col w-2/3'>
                                <label className='' htmlFor="email">Email</label>
                                <input className='outline-none bg-transparent border-b-2 border-white' type="email" />
                            </div>
                            <div className='flex flex-col w-2/3 mt-3'>
                                <label className='' htmlFor="password">Password</label>
                                <input className='outline-none bg-transparent border-b-2 border-white' type="password" />
                            </div>
                            <div className='mt-10 w-full text-center'>
                                <button className='bg-[#f66916] w-2/3 py-2 px-5 text-white font-bold'>Login</button>
                            </div>
                        </div>
                    </form>
                    <div className='flex justify-center items-center mt-10 px-28'>
                        <hr className='flex-grow border-t border-white' />
                        <p className='mx-2 text-white text-center'>Or</p>
                        <hr className='flex-grow border-t border-white' />
                    </div>
                    <div className='text-white w-full flex justify-center mt-5'>
                        <button className='flex items-center gap-1 hover:text-black hover:bg-[#fcfcfc] py-2 px-3 font-bold'> <FcGoogle className='text-xl' />Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;