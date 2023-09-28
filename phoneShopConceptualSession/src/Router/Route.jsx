import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import LogIn from "../Pages/LogIn/LogIn";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Phone from "../Pages/phone/Phone";

const myCreatedRoute = createBrowserRouter([
{
    path:"/",
    element: <div>
        <MainLayout></MainLayout> 
    
    </div>,
    errorElement:<ErrorPage></ErrorPage>,
         

         
    children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('/phones.json')
        }, 
        {
            path:"/favorites",
            element: <Favorites></Favorites>,


        },
        {
            path:"/login",
            element: <LogIn></LogIn>,


        },
        {
            path:"/phones/:id",
            element:<Phone></Phone>,
            loader:()=>fetch('/phones.json')
            

        }
    ]
}

])
export default myCreatedRoute;