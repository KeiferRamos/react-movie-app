import React from "react";
import Poster from "../../components/poster/poster";
import "./movies.css";
import { connect } from "react-redux";
import ArrowUp from "../../components/arrow-up/arrow.up";

function Movie({ filteredMovies }) {
  return (
    <div className="advance-search">
      {filteredMovies.map((item, i) => {
        return <Poster key={i} item={item} />;
      })}
      <ArrowUp />
    </div>
  );
}

export default connect((state) => state)(Movie);
