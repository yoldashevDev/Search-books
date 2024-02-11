import React from "react";
import Modal from "../modal/Modal";

function Card({ item }) {
  var amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
  var smallThumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div>
      <div className="card">
        <img src={smallThumbnail} alt="" />
        <div className="bottom">
          <h3 className="title">{item.volumeInfo.title}</h3>
        
        </div>
      </div>
    </div>
  );
}

export default Card;
