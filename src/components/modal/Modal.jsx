import React from "react";
import "./modal.css";
import { FaRegTimesCircle } from "react-icons/fa";

function Modal({ show, item, setShow }) {
    // var smallThumbnail =
    // item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    console.log(item);
  return (
    <div>
      <div className={show ? "overlay active" : "overlay"}>
        <div className="overlay_inner">
          <button className="close" onClick={() => setShow(false)}>
            <FaRegTimesCircle />
          </button>
          <div className="inner_box">
            <img src="" alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.author}</h3>
              <h4>
                {item.volumeInfo.publisher}{" "}
                <span>{item.volumeInfo.publishedDate} </span>
              </h4>
              <a href={item.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="desc">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </div>
  );
}

export default Modal;
