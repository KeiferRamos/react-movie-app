import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchDatas } from "../../api/moviesAPI";
import Poster from "../poster/poster";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./styles.css";

function MoviesContainer({ category }) {
  const [moviesData, setMoviesData] = useState([]);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    fetchDatas(category).then(({ items }) => {
      setMoviesData(items);
    });
  }, []);

  const arrowEventListener = (arrow) => {
    setPosition((prevVal) => (arrow == "left" ? prevVal + 350 : prevVal - 350));
  };

  return (
    <div className="movies-poster">
      <h1 className="movie-category">{category}</h1>
      <div className="movies-slider">
        {position < 0 && (
          <FaChevronLeft
            className="arrow-left"
            onClick={() => arrowEventListener("left")}
          />
        )}
        <div className="movies-container" style={{ left: position }}>
          {moviesData.map((item, i) => {
            return <Poster key={i} item={item} />;
          })}
        </div>
        <FaChevronRight
          className="arrow-right"
          onClick={() => arrowEventListener("right")}
        />
      </div>
    </div>
  );
}

export default MoviesContainer;
