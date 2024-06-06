import axios from 'axios';
import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SinMyRecipe = ({ res, index }) => {
    const { title, recipeImg, _id, setData, data } = res
    const handleDelet = (id) => {
        axios.delete(`http://localhost:5000/recipes/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    toast.success('Delete successful')
                    const remainR = data.filter(recipe => recipe._id !== id)
                    setData(remainR)
                }
            })
    }
    return (
        <div className='mt-7 text-black bg-[#ffffffaf] grid grid-cols-12 p-2 rounded-xl'>
            <div className='h-full flex justify-center items-center'>
                <h1 className='text-xl font-bold'>{index + 1}</h1>
            </div>
            <div className='h-full w-full col-span-3'>
                <img className='w-[150px] h-[90px]' src={recipeImg} alt="recipeImg" />
            </div>
            <div className='col-span-4 flex justify-center items-center'>
                <h1 className='text-2xl font-bold'>{title}</h1>
            </div>
            <div className='col-span-4 flex justify-center items-center gap-2'>
                <div className='flex flex-col gap-2'>
                    <Link to={`/details/${_id}`}>
                        <button className='bg-[#f66916] py-2 px-4 rounded-md text-white font-bold w-full'>View Details</button>
                    </Link>
                    <Link to={`/updateR/${_id}`}><button className='bg-green-500 py-2 px-4 rounded-md text-white font-bold w-full'>Update</button></Link>
                </div>
                <button onClick={() => handleDelet(_id)} className='bg-red-500 py-2 px-4 rounded-md text-white font-bold'>Delete</button>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default SinMyRecipe;