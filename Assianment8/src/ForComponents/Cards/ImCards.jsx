/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ImCards = ({ card }) => {
  const { Picture, Title, Category, Card_bg, Category_bg, Text_bg, id } =
    card || {};

  return (
    <div>
      <Link to={`/cards/${id}`}>
        <div
          className="card w-full  bg-base-100 "
          style={{ backgroundColor: Card_bg }}
        >
          <figure>
            <img src={Picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2
              className="card-title font-semibold "
              style={{ color: Text_bg }}
            >
              {Category}
            </h2>
            <p className="font-extrabold" style={{ color: Text_bg }}>
              {Title}
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImCards;
