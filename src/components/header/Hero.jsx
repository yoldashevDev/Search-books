import React, { useState } from "react";
import "./hero.css";
import { FaSearch } from "react-icons/fa";
import Card from "../card/Card";
import axios from "axios";

function Hero() {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBook = (e) => {
    e.preventDefault()
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + search +`&key=AIzaSyD9HQC0pvb1vc_hd2ukh0PVDe3WijBzZlc` +`&maxResults=40`
      )
      .then((res) => setBookData(res.data.items))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="row1">
            <h1>
              A room without books is like <br /> a body without a soul.
            </h1>
          </div>
          <div className="row2">
            <h2>Find Your Book</h2>
            <form action="" className="search" onSubmit={(e)=>{
      searchBook(e);
            }}>
              <input
                type="text"
                placeholder="Enter your book name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
              >
                <FaSearch />
              </button>
            </form>
            <img src="images/img1.png" alt="" />
          </div>
        </div>
        <main>
          {bookData.map((item) => {
            return <Card item={item} />;
          })}
        </main>
      </div>
    </>
  );
}

export default Hero;
