import React from "react";

function Card(props) {
  const { image, status, rating, reviewCount, loc, title, price } = props;
  return (
    <div className="card">
      <div className="card--image-container">
        <img src={`cards/${image}`} alt="Card image" className="card--image"/>
        {status && <div className="card--status">{status}</div>}
      </div>
      <div className="card--text-container">
        <span className="card--rating-loc">
          <span className="card--star">★ </span>
          <span className="card--rating black">{rating.toFixed(1)}</span>
          <span> </span>
          <span className="card--reviews gray">({reviewCount}) • {loc}</span>
        </span>
        <span className="card--title black">{title}</span>
        <span className="card--price-line black">
          <span className="card--price bold">From ${price}</span>
          <span> / person</span>
        </span>
      </div>
    </div>
  )
}

export default Card;
