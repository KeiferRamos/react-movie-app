import React from "react";
import { connect } from "react-redux";
import Modal from "../../components/modal/modal";
import Movie from "../../components/watchlist/movie";
import "./watchlist.css";
import ArrowUp from "../../components/arrow-up/arrow.up";

function Watchlist({ watchlists }) {
  return (
    <div className="watchlist-container">
      {watchlists.length > 0 ? (
        watchlists.map((id, i) => {
          return <Movie key={i} id={id} />;
        })
      ) : (
        <Modal
          message={"bookmark your favorite movie so you can watch it later"}
        />
      )}
      <ArrowUp />
    </div>
  );
}

export default connect((state) => state)(Watchlist);
