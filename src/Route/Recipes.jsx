import React, { useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import SinRecipe from '../Components/SinRecipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [allRecipes, setallRecipes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => {
                setRecipes(data)
                setallRecipes(data)
            })
    }, [])
    const handleSearch = (e) => {
        const search = e.target.value;
        if (search) {
            const SearchItem = recipes.filter(res => res.title.toLowerCase().includes(search))

            if (SearchItem) {
                return setRecipes(SearchItem)
            }
        }
        return setRecipes(allRecipes)
    }
    const handleCategory = e => {
        const category = e.target.value;
        if (category === 'All') {
            return setRecipes(allRecipes)
        }
        else {
            const filterItem = allRecipes.filter(res => res.category === category)
            setRecipes(filterItem)
        }
    }
    return (
        <div className='container mx-auto'>
            <div className='mt-8 mb-12 text-center overflow-hidden relative'>
                <h1 className='text-8xl font-custom text-[#9e9e9e] opacity-30'>FlavorFair</h1>
                <h1 className='text-5xl font-bold absolute top-[1.25rem] left-[35.25rem]'>All Recipes</h1>
            </div>
            <div className='bg-[#f66916] p-4 rounded-full flex justify-center gap-8 w-full'>
                <div className='relative w-1/2'>
                    <input onChange={handleSearch} className='border-none outline-none rounded-full py-3 px-5 w-full' placeholder='Search Recipes' type="text" />
                    <IoSearch className='absolute top-[10px] hover:text-[#f66916] cursor-pointer right-5 text-3xl text-[#000000]' />
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-white text-xl'>Sort by category:</p>
                    <select onChange={handleCategory} className='py-2 px-3 outline-none text-xl rounded-full' name="category">
                        <option value="All">All</option>
                        <option value="Desserts">Desserts</option>
                        <option value="Main Courses">Main Courses</option>
                        <option value="Appetizers">Appetizers</option>
                    </select>
                </div>
            </div>
            <div className='my-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-4 '>
                {
                    recipes.map(recipe => <SinRecipe key={recipe._id} recipe={recipe}></SinRecipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;