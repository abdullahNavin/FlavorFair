import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';


const UpdateRecipe = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    // console.log(data);

    const handleUpdate = e => {
        e.preventDefault()
        const title = e.target.title.value;
        const recipeImg = e.target.recipeImg.value;
        const description = e.target.description.value;
        const ingredients = e.target.ingredients.value.split(',');
        const instructions = e.target.instructions.value.split(',')
        const cuisineType = e.target.cuisineType.value;
        const difficulty = e.target.difficulty.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const category = e.target.category.value;

        // const email = user.email
        // const author = user.displayName
        // const authorImg = user.photoURL;

        const obj = { title, recipeImg, description, ingredients, instructions, cuisineType, difficulty, price, rating, category}
        axios.put(`http://localhost:5000/recipes/${data._id}`, obj)
        .then(res=>{
            if(res.data.modifiedCount){
                toast.success('Update successfull')
            }
        })
    }
    return (
        <div>
            <div>
                <h1 className='text-5xl text-center font-bold mt-6'>Update Recipes</h1>
            </div>
            <div className='my-10 py-8  bg-[#03314d]'>
                <form onSubmit={handleUpdate}>
                    <div className='flex flex-col justify-center items-center text-white'>
                        <div className='flex flex-col w-2/3'>
                            <label className='' htmlFor="Name">Recipe Name</label>
                            <input defaultValue={data.title} name='title' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="recipeImg">Recipe Img url</label>
                            <input defaultValue={data.recipeImg} name='recipeImg' className='outline-none bg-transparent border-b-2 border-white' type="url" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="description">Short Description</label>
                            <input defaultValue={data.description} name='description' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="ingredients">Ingredients <span className='italic'>(must be use ',' after every ingredient)</span></label>
                            <input defaultValue={data.ingredients} name='ingredients' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="instructions">Instructions <span className='italic'>(must be use ',' after every steps)</span></label>
                            
                            <textarea defaultValue={data.instructions} name="instructions" className='outline-none bg-transparent border-[2px] rounded border-white' cols="30" rows="5"></textarea>
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="cuisineType">Type of cuisine</label>
                            <input defaultValue={data.cuisineType} name='cuisineType' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="difficulty">Difficulty</label>
                            <input defaultValue={data.difficulty} name='difficulty' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="price">price</label>
                            <input defaultValue={data.price} name='price' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="rating">rating</label>
                            <input defaultValue={data.rating} name='rating' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3 text-black'>
                            <label className='text-white' htmlFor="category">category</label>
                            <select defaultValue={data.category} className='outline-none' name="category">
                                <option value="Desserts">Desserts</option>
                                <option value="Main Courses">Main Courses</option>
                                <option value="Appetizers">Appetizers</option>
                            </select>
                        </div>

                        <div className='mt-10 w-full text-center'>
                            <button className='bg-[#f66916] w-2/3 py-2 px-5 text-white font-bold'>Add Recipe</button>
                        </div>
                    </div>
                </form>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default UpdateRecipe;