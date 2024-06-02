import { createBrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import Recipes from "./Recipes";
import Login from "./Login";

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
    }
])

export default router;