import { useEffect, useState } from "react";
import PhoneCards from "../phone/PhoneCards";

const Favorites = () => {

    const [favorites,setFavorites]=useState()
    const [noFound,setNofound]=useState(" ")

    useEffect(()=>
    {
        const favoritesItems=JSON.parse(localStorage.getItem("favorites"));
        if(favoritesItems)
        {
            setFavorites(favoritesItems);
        }
        else{
            setNofound('no data Found')
        }
      
    },[])

    return (
        <div>
       
        {noFound?<p className="h-[80vh] flex justify-center items-center">{noFound}</p>: <div>

            <div>
            {favorites.map(phone=><PhoneCards key={phone.id} phone={phone}></PhoneCards>)}

            </div>

           
            
            
            
            </div>}
            
        </div>
    );
};

export default Favorites;