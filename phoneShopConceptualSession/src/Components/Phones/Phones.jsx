import PhoneCard from "./PhoneCard";


const Phones = ({phones}) => {
    console.log(phones)
    return (   
        <div className="py-10 text-center">
            <h2>All Category Phones</h2>
            <div className="grid gap-3 ml-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    phones?.map(phone=><PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
            
        </div>
    );
};

export default Phones;