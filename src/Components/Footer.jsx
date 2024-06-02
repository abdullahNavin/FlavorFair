import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black py-10 pb-20'>
            <div className='text-gray-300 text-center'>
                <h1 className='text-3xl pt-5 pb-7'>Join Our List</h1>
                <p>Get timely updates for your favorite recipes</p>
                <input className='mt-7 py-1 px-3 outline-none bg-black border-gray-900 border' type="text" placeholder='Email Address'/>
                <button className='py-[6px] px-3 -ml-1 bg-gray-900'>Subscrib</button>
            </div>
            <div className='container mx-auto flex justify-between mt-16'>
                <div className='text-white w-1/3'>
                    <h1 className='text-xl mb-2'>Contract info</h1>
                    <p className='my-1'>Phone: <a href="tel:01715175021">01715175021</a></p>
                    <p>Email: <a href="mailto:navinhp26@gmail.com">navinhp26@gmail.com</a></p>
                    <p className='mt-1'>Adderss: Dhaka, Bangladesh</p>
                </div>
                <div className='w-1/3 inline-block border-x border-gray-400'>
                    <img className='w-[40%] py-2 px-5 mx-auto bg-white' src="/src/assets/assignment11-removebg-preview.png" alt="" />
                    <p className='text-white text-center mt-8'>Crafted with Love, Shared with Joy</p>
                </div>
                <div className='flex text-white justify-center gap-6 w-1/3'>
                    <div className='flex-col flex space-y-2'>
                        <a href="">Payment Method</a>
                        <a href="">Tearms of use</a>
                        <a href="">shiping Policy</a>
                        <a href="">Return Policy</a>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <a href="">Facebook</a>
                        <a href="">Youtube</a>
                        <a href="">X</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;