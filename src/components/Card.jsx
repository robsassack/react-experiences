import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="card--image-container">
        <img src="cards/katie-zaferes.png" alt="Card image" className="card--image"/>
        <div className="card--status">SOLD OUT</div>
      </div>
      <div className="card--text-container">
        <span className="card--rating-loc">
          <span className="card--star">★ </span>
          <span className="card--rating black">5.0</span>
          <span> </span>
          <span className="card--num-avail gray">(6) • </span>
          <span className="card--loc gray">USA</span>
        </span>
        <span className="card--desc black">Life lessons with Katie Zaferes</span>
        <span className="card--price-line black">
          <span className="card--price bold">From $136</span>
          <span> / person</span>
        </span>
      </div>
    </div>
  )
}

export default Card;
