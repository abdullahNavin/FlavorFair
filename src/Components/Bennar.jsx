import React from 'react';

const Bennar = () => {
    return (
        <div className='h-[80vh] w-full relative'>
            <img className='h-full w-full object-cover' src="/src/assets/img1.jpg" alt="" />
            <div className='h-full w-full flex justify-center items-center bg-[#00000053] absolute top-0 left-0'>
                <div className='bg-[#f76a1877] p-5 rounded'>
                    <h1 className='text-8xl text-[#ffffff] font-custom mt-1'>FlavorFair</h1>
                    <h1 className='text-white text-center text-3xl my-2'>Share the Flavor, Spread the Joy</h1>
                </div>
            </div>
        </div>
    );
};

export default Bennar;