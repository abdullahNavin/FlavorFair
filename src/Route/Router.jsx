import { createBrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import Recipes from "./Recipes";
import Login from "./Login";
import SignUp from "./SignUp";
import Deshbord from "./Deshbord";
import MyRecipes from "./Deshbord/MyRecipes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddRecipes from "./Deshbord/AddRecipes";
import MyBuyRecipes from "./Deshbord/MyBuyRecipes";
import MySellRecipes from "./Deshbord/MySellRecipes";
import UpdateRecipe from "./Deshbord/UpdateRecipe";

const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<MainRouter></MainRouter>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/recipes',
                element:<Recipes></Recipes>
            },
            {
                path:'/UpdateR/:id',
                loader:({params})=> fetch(`http://localhost:5000/recipes/${params.id}`),
                element:<PrivateRoute><UpdateRecipe></UpdateRecipe></PrivateRoute>
            }
            
        ]
    },
    {
        path:'/Login',
        element:<Login></Login>
    },
    {
        path:'/SignUp',
        element:<SignUp></SignUp>
    },
    {
        path:'/Deshbord',
        element:<PrivateRoute><Deshbord></Deshbord></PrivateRoute>,
        children:[
            {
                path:'/Deshbord',
                element:<MyRecipes></MyRecipes>
            },
            {
                path:'/Deshbord/AddR',
                element:<AddRecipes></AddRecipes>
            },
            {
                path:'/Deshbord/BuyR',
                element:<MyBuyRecipes></MyBuyRecipes>
            },
            {
                path:'/Deshbord/SellR',
                element:<MySellRecipes></MySellRecipes>
            }
        ]
    },
])

export default router;