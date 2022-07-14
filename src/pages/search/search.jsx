import React from "react";
import CheckBoxContainer from "../../components/checkbox/checkbox";
import "./search.css";
import AdvanceFilter from "../../data/advanceSearch";

function Search() {
  return (
    <div className="advance-search">
      <div className="checkbox-container">
        {AdvanceFilter.map(({ title, items }, i) => {
          return (
            <div className="main-container" key={i}>
              <h1>{title}</h1>
              <CheckBoxContainer items={items} />
            </div>
          );
        })}
        <button>Search</button>
      </div>
    </div>
  );
}

export default Search;
