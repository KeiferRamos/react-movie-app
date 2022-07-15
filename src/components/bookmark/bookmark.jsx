import React from "react";
import { FaPlus } from "react-icons/fa";
import { connect } from "react-redux";
import { REMOVE_WATCHLIST, SET_WATCHLIST } from "../../actions/action";

function Bookmark({ dispatch, watchlists, id }) {
  const bookmarkItem = () => {
    dispatch({
      type: watchlists.includes(id) ? REMOVE_WATCHLIST : SET_WATCHLIST,
      payload: id,
    });
  };

  return <FaPlus className="bookmark" onClick={() => bookmarkItem()} />;
}

export default connect((state) => state)(Bookmark);
