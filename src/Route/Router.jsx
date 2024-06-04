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
                path:'/Deshbord/MyR',
                element:<MyRecipes></MyRecipes>
            }
        ]
    }
])

export default router;