import React from "react";

function Card(props) {
  const image = props.item.coverImg;
  const openSpots = props.item.openSpots;
  const rating = props.item.stats.rating;
  const reviewCount = props.item.stats.reviewCount;
  const loc = props.item.location;
  const title = props.item.title;
  const price = props.item.price;

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (loc === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className='card'>
      <div className='card--image-container'>
        <img src={`cards/${image}`} alt='Card image' className='card--image' />
        {badgeText && <div className='card--open-spots'>{badgeText}</div>}
      </div>
      <div className='card--text-container'>
        <span className='card--rating-loc'>
          <span className='card--star'>★ </span>
          <span className='card--rating black'>{rating.toFixed(1)}</span>
          <span> </span>
          <span className='card--reviews gray'>
            ({reviewCount}) • {loc}
          </span>
        </span>
        <span className='card--title black'>{title}</span>
        <span className='card--price-line black'>
          <span className='card--price bold'>From ${price}</span>
          <span> / person</span>
        </span>
      </div>
    </div>
  );
}

export default Card;
