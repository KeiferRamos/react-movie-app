import React from "react";
import MoviesContainer from "../../components/movies/movies-container";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <MoviesContainer category="MostPopularMovies" />
      <MoviesContainer category="InTheaters" />
    </div>
  );
}

export default Home;
