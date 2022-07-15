import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Bookmark from "../bookmark/bookmark";
import "./styles.css";

function Poster({ item }) {
  const { image, title, id, year } = item;
  const navigate = useNavigate();

  return (
    <div
      className="poster"
      onClick={({ target }) => {
        if (target.className !== "bookmark") {
          navigate(`/movie-info/${id}`);
        }
      }}
    >
      {image && <img src={image} alt="movie poster" />}
      <Bookmark id={id} />
      <div className="info">
        {title && <p className="title">{title}</p>}
        {year && <p className="year">{year}</p>}
      </div>
    </div>
  );
}

export default Poster;
