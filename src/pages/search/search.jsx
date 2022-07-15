import React, { useEffect, useState } from "react";
import CheckBoxContainer from "../../components/checkbox/checkbox";
import "./search.css";
import AdvanceFilter from "../../data/advanceSearch";
import { connect } from "react-redux";
import { FilterSearching } from "../../api/moviesAPI";
import { CLEAR_PARAMS, FILTER_MOVIES } from "../../actions/action";
import { useNavigate } from "react-router-dom";

function Search({ usp, dispatch }) {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const searchParams = async () => {
    const valid = Object.keys(usp).some((item) => usp[item].length > 0);

    if (valid) {
      const searchQuery = [];

      Object.keys(usp).forEach((item) => {
        if (usp[item].length > 0) {
          searchQuery.push(`${item}=${usp[item].join(",")}`);
        }
      });
      FilterSearching(searchQuery.join("&")).then((data) => {
        dispatch({ type: FILTER_MOVIES, payload: data.results });
        window.scroll(0, 0);
        navigate(`/${searchQuery.join("&")}`);
        dispatch({ type: CLEAR_PARAMS });
      });
    } else {
      setErrorMsg("enter at least one filter.");
    }
  };

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
    }
  }, [errorMsg]);

  return (
    <div className="search">
      <div className="checkbox-container">
        {AdvanceFilter.map(({ title, items, params }, i) => {
          return (
            <div className="main-container" key={i}>
              <h1>{title}</h1>
              <CheckBoxContainer items={items} params={params} />
            </div>
          );
        })}
        <div className="search-container">
          <button className="search-btn" onClick={() => searchParams()}>
            Search
          </button>
          <p>{errorMsg}</p>
        </div>
      </div>
    </div>
  );
}

export default connect((state) => state)(Search);
