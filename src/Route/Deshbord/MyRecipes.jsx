import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import axios from 'axios';
import SinMyRecipe from '../../Components/SinMyRecipe';

const MyRecipes = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/recipes?email=${user?.email}`)
            .then(res => setData(res.data))
    }, [user])
    return (
        <div>
            <div className='text-center'>
                <h1 className='bg-[#f66816a2] text-white px-10 py-3 text-3xl font-bold rounded-full'>My Recipes</h1>
            </div>
            <div>
                {
                    data.map((res,index) => <SinMyRecipe key={res._id} index={index} res={res}></SinMyRecipe>)
                }
            </div>
        </div>
    );
};

export default MyRecipes;