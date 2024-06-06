import Aos from "aos";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
Aos.init()

const SinRecipe = ({ recipe }) => {
    const { title, recipeImg, difficulty, price, rating, category, authorImg, author,_id } = recipe
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='bg-gray-100 hover:shadow-lg lg:mb-5'>
            <div className="h-[40vh]">
                <img className='w-full h-full' src={recipeImg} alt="recipeImg" />
            </div>
            <div className='p-2'>
                <div className="flex justify-between items-center ">
                    <h1 className='text-xl font-bold my-3'>{title}</h1>
                    <p className={difficulty === 'Easy' && 'text-green-500' || difficulty === 'Medium' && 'text-yellow-500' || difficulty === 'Hard' && 'text-red-500'}>{difficulty}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="rounded-full h-[6vh] w-[6vh]" src={authorImg} alt="" />
                    <h1 className="text-xl">{author}</h1>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-[#f66916] text-xl ml-11">${price}</p>
                    <Link to={`/details/${_id}`}>
                        <button className="bg-[#f66916] hover:bg-[#fa7426] py-2 px-3 text-white rounded-md">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SinRecipe;