import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()
    const { title, recipeImg, description, ingredients, instructions, cuisineType, difficulty, price, rating, category, email, author, authorImg } = data
    return (
        <div>
            <div className='h-[80vh]'>
                <img className='h-full w-full object-fill' src={recipeImg} alt="" />
            </div>
            <div className='container mx-auto my-5'>
                <div>
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <div className='flex gap-5 items-center mt-4'>
                        <img className='h-[50px] w-[50px] rounded-full' src={authorImg} alt="" />
                        <h1 className='text-xl'>{author}</h1>
                    </div>
                    <div className='mt-5'>
                        <label className='text-2xl font-bold' htmlFor="description">Description</label>
                        <p className='mb-5'>{description}</p>
                        <label className='text-2xl font-bold' htmlFor="ingredients">Ingredients</label>
                        <ol className='list-decimal ml-5 mb-5'>
                            {
                                ingredients.map((item, index) => <li key={index} >{item}</li>)
                            }
                        </ol>
                        <label className='text-2xl font-bold' htmlFor="instructions">instructions</label>
                        <ol>
                            {
                                instructions.map((item, index) => <li key={index} >{item}</li>)
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;