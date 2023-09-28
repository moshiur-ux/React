/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const DonationCard = ({card}) => {
    const {Picture,Title,Category ,Card_bg,Category_bg,Text_bg,id,Description,Price}=card ||{};

    return (
        <div >
            
            <div style={{background:Category_bg}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={Picture}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased" style={{color:Text_bg}}>
      {Category}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {Title}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased" style={{color:Text_bg}}>
      {Price}
    </p>
    <a className="inline-block" href="#">
      <button
        className=" btn  text-white flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button" style={{background:Text_bg}}
      >
        View Detils
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
      
        </div>
    );
};

export default DonationCard;