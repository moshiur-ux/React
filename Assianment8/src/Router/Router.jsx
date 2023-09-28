import { createBrowserRouter } from "react-router-dom";
import ForLayout from "../ForLayout/ForLayout";
import Home from "../ForPages/Home/Home";
import Donation from "../ForPages/Donation/Donation";
import Statistics from "../ForPages/Statistics/Statistics";
import Errorpages from "../ForPages/Errorpages/Errorpages";
import Card from "../ForPages/Card/Card";




const myCreatedRouter = createBrowserRouter([

    {

        path:"/",
        element:<ForLayout></ForLayout>,
        errorElement:<Errorpages></Errorpages>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/public.json')
            },
            {
                path:"/doneation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/cards/:id",
                element:<Card></Card>,
                loader:()=>fetch('/public.json')
            }

           
        ]


    }
    

    



]) 
   


export default myCreatedRouter;