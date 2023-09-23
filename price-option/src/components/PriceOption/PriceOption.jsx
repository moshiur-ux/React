import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {
const {name,price,features}=option
    return (
    
        <div className="bg-blue-400 rounded-md p-4 flex flex-col text-white" >
           <h2>
           <span className="text-7xl font-extrabold">{price} </span>
            <span className="text-2xl">/mon</span>
            
           </h2>

           <h4 className="text-3xl text-center gap-2">{name}</h4>
          <div className="pl-4 flex-grow">
          {
            features.map((feature,idx)=><Feature key={idx} feature={feature}></Feature>)
           }
          </div>
          <button className="mt-12 bg-green-400 w-full py-2 font-bold rounded-lg hover:bg-green-800">Buy now</button>
        </div>

            

    );
};

export default PriceOption;