import { Outlet } from "react-router-dom";
import Navbar from "../ForComponents/Header/Navbar/Navbar";

const ForLayout = () => {
    return (
        <div className="max-w-[1600px] mx-auto mr-4 py-4 px-5">
           <Navbar></Navbar>
           <div className="py-5 text-center">
           <Outlet></Outlet>

           </div>
            
            
        </div>
    );
};

export default ForLayout;