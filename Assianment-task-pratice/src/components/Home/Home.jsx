/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allActors, setAllactors] = useState([]);
  const [selectedActors,setSelectedActors]=useState([]);
   const [remaining,setRemaining]=useState(0);
   const [totalCost,setTotalCost]=useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllactors(data));
  }, []);
   
  const handleSelectActor=(actor)=>
  {
    const isExist =selectedActors.find(item=>item.id==actor.id)
  let count =actor.salary;
    if(isExist)
    {
       return alert("Already Done")
    }
    else{
       selectedActors.forEach((item)=>
       {
        count=count+item.salary;
       })
       
       const totalRemaining=20000-count;
    
       if(count>=20000)
       {
        return alert("taka ses r hobe na")

       }
       else{
        setTotalCost(count);

    
        setRemaining(totalRemaining);
 
         setSelectedActors([...selectedActors,actor])

       }
      

    }

    

  }


  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
         {
            allActors.map(actor=>(

                <div key={actor.id} className="card">
                <img
                  className="photo"
                  src={actor.image}
                  alt=""
                />
    
                <h2>{actor.name}</h2>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </small>
                </p>
                <div className="info">
                  <p>salary:${actor.salary}</p>
                  <p>Role: {actor.role}</p>
                </div>
                <button onClick={()=>handleSelectActor(actor)} className="class-btn">select</button>
              </div>
            ))
         }
        </div>

        <div className="cart">
          <h2><Cart selectedActors={selectedActors} remaining={remaining} totalCost={totalCost}></Cart></h2>
        </div>


      </div>
    </div>
  );
};

export default Home;
