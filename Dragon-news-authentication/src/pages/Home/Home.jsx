import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Leftsidenav from "../Shared/Leftsidenav/Leftsidenav";
import Navbar from "../Shared/Navbar/Navbar";
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard/NewsCard";


const Home = () => {

    const news =useLoaderData();
    console.log(news)



    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <Leftsidenav></Leftsidenav>
                </div>
                <div className=" md:col-span-2 border">
                
                {
                    news.map(aNews=><NewsCard key={aNews.id} news={aNews}>

                    </NewsCard>)
                }

                </div>
                <div className="">
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
            
        </div>
    );
};

export default Home;