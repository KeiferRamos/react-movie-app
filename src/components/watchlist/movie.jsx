import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { REMOVE_WATCHLIST } from "../../actions/action";
import { getSingleData } from "../../api/moviesAPI";
import "./watchlist.css";

function Movie({ id, dispatch }) {
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const { image, title, year, genreList, plot, runtimeStr } = item;

  useEffect(() => {
    getSingleData(id).then((data) => setItem(data));
  }, [id]);

  const removeItem = () => {
    dispatch({ type: REMOVE_WATCHLIST, payload: id });
  };

  return (
    <div
      className="watchlist-movie"
      onClick={({ target }) => {
        if (target.className !== "remove-btn") {
          navigate(`/movie-info/${id}`);
        }
      }}
    >
      <img src={image} alt="" />
      <div className="watchlist-info">
        <div className="watchlist-title">
          <h3>{title}</h3>
          <p className="year">{year}</p>
        </div>
        <div className="genres">
          {genreList?.map(({ value }, i) => {
            return <p key={i}>{value}</p>;
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
        <div className="watchlist-remove">
          <button className="remove-btn" onClick={() => removeItem()}>
            remove from watchlist
          </button>
          {runtimeStr && <p className="runtime">{runtimeStr}</p>}
        </div>
      </div>
    </div>
  );
}

export default connect((state) => state)(Movie);
