import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css'


const Countries = () => {
    const [countries,setCountrie]=useState([]);
    const [visitedCountries ,setVisitedCountries]=useState([])
    const [visitedCountryFlag,setCountryFlag]=useState([])
     useEffect(()=>{
       fetch('https://restcountries.com/v3.1/all')
       .then(res=>res.json())
       .then(data=> setCountrie(data))
       
     },[])

     const handleCountryFlag=flag=>
     {
      const newvisitedFlag=[...visitedCountryFlag,flag]
      setCountryFlag(newvisitedFlag)

     }

     const handleVisitedCountry=country =>
     {
      console.log('add to your visited countrys')
      
      const newvisitedCountry=[...visitedCountries,country]

       setVisitedCountries(newvisitedCountry)

     }

    return (
        <div>
          {/* visited country */}
            <h3>Countries:{countries.length} </h3>
            <div>
              <h5>
                visited country:{visitedCountries.length}
              </h5>
            
              <ul>
                {
                  visitedCountries.map(country=><li key={ country.cca3}>{country.name.common}</li>)
                }

              </ul>
            </div>
            <div className="flag-container">
              {
                visitedCountryFlag.map((flag,idx)=><img key={idx} src={flag}></img>)

              }
              
            </div>

            {/* display country */}
            
           <div className="country-container">
           {
               countries.map(country=><Country key={country.cca3}
                 handleVisitedCountry={handleVisitedCountry}
                 handleCountryFlag={handleCountryFlag}
                
                country={country}></Country>)

               
             }
            
           </div>
        </div>
    );
};

export default Countries;
