import { createBrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainRouter></MainRouter>,
        errorElement:<ErrorPage></ErrorPage>
    }
])

export default router;