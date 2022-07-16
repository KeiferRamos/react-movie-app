import React from "react";
import { connect } from "react-redux";
import Movie from "../../components/watchlist/movie";
import "./watchlist.css";

function Watchlist({ watchlists }) {
  return (
    <div className="watchlist-container">
      {watchlists.map((id) => {
        return <Movie id={id} />;
      })}
    </div>
  );
}

export default connect((state) => state)(Watchlist);
