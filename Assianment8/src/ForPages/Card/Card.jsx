/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Imcard from "./Imcard";

const Card = () => {

const [card,setCard]=useState({})
const{id}=useParams()
const cardss=useLoaderData()


useEffect(()=>{

    const findCard =cardss?.find(card=>card.id===id)

   setCard(findCard)




},[id,cardss])
console.log(card)


    return (
        <div>
            <Imcard card={card}></Imcard>


            
            
        </div>
    );
};

export default Card;