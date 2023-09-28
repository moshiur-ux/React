/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import swal from "sweetalert";


const Imcard = ({card}) => {
    const {Picture,Title,Category ,Card_bg,Category_bg,Text_bg,id,Description,Price}=card ||{};


    
    const handleAddToDonation  = () => {
        const addedFavoritesArray = [];
    
        const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    
        //jokhon kisu nai tokhon e if vitor dhukba
        if (!favoriteItems) {
          addedFavoritesArray.push(card);
          localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
          swal("Good job!", "You are successfully Donated Thank you!", "success");
        } 
        
        else {
    
    
          const isExits = favoriteItems.find((card) => card.id === id);
    
          
          if (!isExits) {
    
            addedFavoritesArray.push(...favoriteItems, card);
            localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
            swal("Good job!", "You are successfully Donate Thanks you!", "success");
           
          } else {
            swal("Error!", "No duplicate !", "error");
          }
    
        
    
    
        }
    }


      return (
        <div>
          <div className="mx-auto max-w-screen-md py-12">
  <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  
    <img
      alt="nature"
      className="h-[32rem] w-full object-cover object-center"
      src={Picture}
    />
   <div className=" absolute bottom-0 left-0 h-[100px] w-full bg-black bg-opacity-50 ">
   <button onClick={handleAddToDonation} className="btn  m-4 text-white " style={{background:Text_bg}} >Donate:{Price}</button>

   </div>

   
  </div>
  <h2 className="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
    {Title}
  </h2>
  <p className="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
   {Description}
  </p>
</div>
            
            
        </div>
    );
};

export default Imcard;