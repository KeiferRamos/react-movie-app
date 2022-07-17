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

  return (
    <div>
      {!watchlists.includes(id) && (
        <FaPlus className="bookmark" onClick={() => bookmarkItem()} />
      )}
    </div>
  );
}

export default connect((state) => state)(Bookmark);
