import React from "react";
import Poster from "../../components/poster/poster";
import "./movies.css";
import { connect } from "react-redux";

function Movie({ filteredMovies }) {
  console.log(filteredMovies);
  return (
    <div className="advance-search">
      {filteredMovies.map((item, i) => {
        return <Poster key={i} item={item} />;
      })}
    </div>
  );
}

export default connect((state) => state)(Movie);
