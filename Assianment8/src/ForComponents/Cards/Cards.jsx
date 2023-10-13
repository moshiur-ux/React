/* eslint-disable react/prop-types */
import ImCards from "./ImCards";

const Cards = ({cards}) => {
    console.log(cards);

    return (
        <div className="py-5 mb-4">

            <h2 className="text-4xl"> Your Servicess</h2>

            <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    cards?.map(card=><ImCards key={card.id} card={card}></ImCards>)
                }
            </div>

            
        </div>
    );
};

export default Cards;