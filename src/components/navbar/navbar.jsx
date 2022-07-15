import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { autoCompleteSearch, AdvancedSearch } from "../../api/moviesAPI";
import categories from "../../data/categories";
import "./navbar.css";
import { connect } from "react-redux";
import { FILTER_MOVIES } from "../../actions/action";

function Navbar({ dispatch }) {
  const [input, setInput] = useState("");
  const [recommended, setRecommended] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (input) {
      autoCompleteSearch(input).then((response) => {
        setRecommended(response.results);
      });
    } else {
      setRecommended([]);
    }
  }, [input]);

  const filterMovies = async (genre) => {
    AdvancedSearch(genre).then((response) => {
      dispatch({ type: FILTER_MOVIES, payload: response.results });
    });
    navigate(`/${genre}`);
  };

  return (
    <div className="navbar">
      <div className="searchbar">
        <img
          src="https://avatars.dicebear.com/api/initials/Keifer Ramos.svg"
          alt=""
        />
        <input
          type="text"
          value={input}
          placeholder="e.g. Harry Potter"
          onChange={(e) => {
            setInput("");
            setInput(e.target.value);
          }}
        />
        <FaSearch />
        <div className="search-recommended">
          {recommended.map(({ title, id }, i) => {
            return (
              <p
                key={i}
                onClick={() => {
                  setInput("");
                  setRecommended([]);
                  navigate(`/movie-info/${id}`);
                }}
              >
                {title}
              </p>
            );
          })}
        </div>
      </div>
      <div className="categories">
        {categories.map(({ name, logo }, i) => (
          <div
            key={i}
            className={`${
              name == window.location.pathname.slice(1) && "active"
            } category`}
            onClick={() => filterMovies(name)}
          >
            {logo}
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default connect((state) => state)(Navbar);
