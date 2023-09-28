import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {

    const [favorites,setFavorites]=useState([])
    const[noFound,setNofound]=useState(false)
    const [isShow,setIsShow] = useState(false)

    useEffect(()=>{

        const favoriteItems=JSON.parse(localStorage.getItem("favorites"));
        if(favoriteItems)
        {
            setFavorites(favoriteItems);

        }
        else{
            setNofound("No data Found")
        }


    },[])
    console.log(favorites);

    return (
        <div>
         {noFound? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>: <div>
            

            <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2">
                {
                    isShow ? favorites.map((card) => (
                        <DonationCard key={card.id} card={card}></DonationCard>
                      )) 
                      
                      : favorites.slice(0,2).map((card) => (
                        <DonationCard key={card.id} card={card}></DonationCard>
                      ))
                }

            </div>

            {favorites.length > 2 && <button  onClick={()=>setIsShow(!isShow)} className="px-5 btn mt-7 bg-green-200 block mx-auto">
            {isShow ? "See less" : "See more"}
          </button>}
            
            </div>}

            
        </div>
    );
};

export default Donation;