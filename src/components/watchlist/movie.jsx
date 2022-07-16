import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getSingleData } from "../../api/moviesAPI";
import ArrowUp from "../arrow-up/arrow.up";
import Bookmark from "../bookmark/bookmark";
import "./watchlist.css";

function Movie({ id }) {
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const { image, title, year, genreList, plot, runtimeStr } = item;

  useEffect(() => {
    getSingleData(id).then((data) => setItem(data));
  }, []);

  return (
    <div
      className="watchlist-movie"
      onClick={({ target }) => {
        if (target.className !== "bookmark") {
          navigate(`/movie-info/${id}`);
        }
      }}
    >
      <img src={image} alt="" />
      <div className="watchlist-info">
        <div className="watchlist-title">
          <h3>{title}</h3>
          <Bookmark />
          <p className="year">{year}</p>
        </div>
        <div className="genres">
          {genreList?.map(({ value }) => {
            return <p>{value}</p>;
          })}
        </div>
        <div className="trailer-btn">
          <div>
            <FaPlay />
          </div>
          <p>Watch trailer</p>
        </div>
        <div className="plot">
          <h3>Plot</h3>
          <p>{plot}</p>
        </div>

        <p className="runtime">{runtimeStr}</p>
      </div>
      <ArrowUp />
    </div>
  );
}

export default Movie;
