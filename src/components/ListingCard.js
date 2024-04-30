import React from "react";

function ListingCard({listing,onFavorite,onRemove}) {
  const handleFavorite = () => {
    onFavorite(listing.id);
  };

  const handleRemove = () => {
    onRemove(listing.id);
  };


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={"https://via.placeholder.com/300x300"} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{"description"}</strong>
        <span> · {"location"}</span>
        <button  onClick={handleRemove}className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
