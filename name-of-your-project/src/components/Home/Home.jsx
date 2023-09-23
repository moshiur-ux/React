import { Outlet } from "react-router-dom";
import Fotter from "../Footer/Fotter";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Fotter></Fotter>
             
            
        </div>
    );
};

export default Home;