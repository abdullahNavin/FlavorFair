import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import Navbar from '../Components/Navbar';
import Aos from "aos";
import 'aos/dist/aos.css';
import { AuthContext } from '../Context/ContextProvider';
import { auth } from '../Firebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
Aos.init()

const SignUp = () => {
    const { name } = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoUrl = e.target.photoUrl.value;
        const password = e.target.password.value;
        // console.log(name, email, photoUrl, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(async res => {
                updateProfile(res.user,{
                    displayName:name,
                    photoURL:photoUrl
                })
                toast.success('Sign up Successfully')
                e.target.reset()
            })
            .catch(error => console.log(error.message))
    }

    const provider = new GoogleAuthProvider()
    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then(res => toast.success('Sign up Successfully'))
            .catch(error => console.log(error.message))
    }

    return (
        <div className='h-screen bg-[url("/src/assets/Login.jpg")] bg-cover bg-center'>
            <Navbar></Navbar>
            <div className='h-full w-full flex justify-center items-center'>
                <div data-aos="fade-up" data-aos-duration="1000" className='bg-[#00000081] w-1/2 p-5'>
                    <h1 className='text-3xl font-bold text-center text-white my-3'>Sign Up</h1>
                    <form onSubmit={handleSignUp}>
                        <div className='flex flex-col justify-center items-center text-white'>
                            <div className='flex flex-col w-2/3'>
                                <label className='' htmlFor="Name">Name</label>
                                <input name='name' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                            </div>
                            <div className='flex flex-col w-2/3'>
                                <label className='' htmlFor="email">Email</label>
                                <input name='email' className='outline-none bg-transparent border-b-2 border-white' type="email" />
                            </div>
                            <div className='flex flex-col w-2/3'>
                                <label className='' htmlFor="Photo">Photo url</label>
                                <input name='photoUrl' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                            </div>
                            <div className='flex flex-col w-2/3 mt-3'>
                                <label className='' htmlFor="password">Password</label>
                                <input name='password' className='outline-none bg-transparent border-b-2 border-white' type="password" />
                            </div>
                            <div className='mt-10 w-full text-center'>
                                <button className='bg-[#f66916] w-2/3 py-2 px-5 text-white font-bold'>Sign Up</button>
                            </div>
                        </div>
                    </form>
                    <div className='flex justify-center items-center mt-8 px-28'>
                        <hr className='flex-grow border-t border-white' />
                        <p className='mx-2 text-white text-center'>Or</p>
                        <hr className='flex-grow border-t border-white' />
                    </div>
                    <div className='text-white w-full flex flex-col items-center justify-center mt-2'>
                        <button onClick={handleGoogle} className='flex items-center gap-1 hover:text-black hover:bg-[#fcfcfc] py-2 px-3 font-bold'> <FcGoogle className='text-xl' />Sign up with Google</button>
                        <p>Already have an account <Link className='text-[#f66916]' to={'/Login'}>Login</Link></p>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default SignUp;