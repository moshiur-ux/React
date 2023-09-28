const Banner = () => {
  return (
    <div className="h-[70vh] bg-transparent bg-black bg-opacity-50 bg-[url('https://i.ibb.co/j6nL81b/toa-heftiba-4xe-y-VFJCvw-unsplash.jpg')] mt-5">
      <div className="text-center py-10">
        <div className="text-6xl font-semibold py-5">I Grow By Helping People In Need</div>
       <div className="mt-6">
       <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Search here..."
          />
          <button className="btn btn-error join-item rounded-r-full text-white">Search</button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Banner;
