import { useLoaderData } from "react-router-dom";
import Cards from "../../ForComponents/Cards/Cards";
import Banner from "../../ForComponents/Header/Banner/Banner";

const Home = () => {
    const cards=useLoaderData();
    console.log(cards);

    return (
        <div>
            <Banner></Banner>
            <Cards cards={cards}></Cards>
            
        </div>
    );
};

export default Home;