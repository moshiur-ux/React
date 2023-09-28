import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCards from "./PhoneCards";

const Phone = () => {
    const [phone,setPhone]=useState({})
    const{id}=useParams();
    const phones =useLoaderData()
    

    useEffect(()=>
    {
        const findPhone =phones?.find((phone)=>phone.id===id);

        setPhone(findPhone)

    },[id,phones])
    

    return (
        <div>
            <PhoneCards phone={phone}></PhoneCards>
         
    
        </div>
    );
};

export default Phone;