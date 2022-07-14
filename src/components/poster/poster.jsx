import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Poster({ item }) {
  const { image, title, id, year } = item;
  const navigate = useNavigate();

  return (
    <div className="poster" onClick={() => navigate(`/movie-info/${id}`)}>
      {image && <img src={image} alt="movie poster" />}
      <div className="info">
        {title && <p className="title">{title}</p>}
        {year && <p className="year">{year}</p>}
      </div>
    </div>
  );
}

export default Poster;
