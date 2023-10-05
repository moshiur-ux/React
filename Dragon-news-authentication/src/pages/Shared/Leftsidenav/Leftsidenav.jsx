import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftsidenav = () => {
    const [categories,setcategories]=useState([])

    useEffect(()=>
    {
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setcategories(data))



    },[])
    return (
        <div className="space-y-4">
            <h2 className="text-3xl">All Categories</h2>
            {
                categories.map(category=><Link to={`/category/${category.id}`} className="block ml-4 text-xl font-bold px-4 " key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default Leftsidenav;