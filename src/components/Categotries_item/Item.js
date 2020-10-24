import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";
const Item = ({ item, getGroup }) => {
  return (
    <div className="card">
      <Link to={`/playlist/ ${item.id}`}>
        <div onClick={() => getGroup(item)} className="cardImg">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="cardContent">
          <h1>{item.title}</h1>
          <p>{item.name}</p>
          <h3>Musics for concentration</h3>
        </div>
        <span className="playIcon">
          <svg
            height="28"
            role="img"
            width="28"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <polygon
              points="21.57 12 5.98 3 5.98 21 21.57 12"
              fill="currentColor"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default Item;
