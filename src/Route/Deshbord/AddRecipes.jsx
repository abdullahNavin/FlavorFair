import React from 'react';

const AddRecipes = () => {
    const handleAddRecipes=e=>{
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
        console.log(title,recipeImg,description,ingredients,instructions,cuisineType,difficulty,price,rating,category);
    }
    return (
        <div>
            <div className='text-center'>
                <h1 className='bg-[#f66816a2] text-white px-10 py-3 text-3xl font-bold rounded-full'>Add Recipes</h1>
            </div>
            <div className='mt-7'>
                <form onSubmit={handleAddRecipes}>
                    <div className='flex flex-col justify-center items-center text-white'>
                        <div className='flex flex-col w-2/3'>
                            <label className='' htmlFor="Name">Name</label>
                            <input name='title' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="recipeImg">Recipe Img url</label>
                            <input name='recipeImg' className='outline-none bg-transparent border-b-2 border-white' type="url" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="description">Short Description</label>
                            <input name='description' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="ingredients">Ingredients <span className='italic'>(must be use ',' after every ingredient)</span></label>
                            <input name='ingredients' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="instructions">Instructions <span className='italic'>(must be use ',' after every steps)</span></label>
                            {/* <input name='instructions' className='outline-none bg-transparent border-b-2 border-white' type="text" /> */}
                            <textarea name="instructions" className='outline-none bg-transparent border-[2px] rounded border-white' cols="30" rows="5"></textarea>
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="cuisineType">Type of cuisine</label>
                            <input name='cuisineType' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="difficulty">Difficulty</label>
                            <input name='difficulty' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="price">price</label>
                            <input name='price' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3'>
                            <label className='' htmlFor="rating">rating</label>
                            <input name='rating' className='outline-none bg-transparent border-b-2 border-white' type="text" />
                        </div>
                        <div className='flex flex-col w-2/3 mt-3 text-black'>
                            <label className='text-white' htmlFor="category">category</label>
                            {/* <input name='category' className='outline-none bg-transparent border-b-2 border-white' type="text" /> */}
                            <select className='outline-none' name="category">
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
        </div>
    );
};

export default AddRecipes;