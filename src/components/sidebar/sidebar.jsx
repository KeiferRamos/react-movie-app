import React from "react";
import { useNavigate } from "react-router-dom";
import sidebarData from "../../data/sidebarData";
import { FaBars } from "react-icons/fa";
import "./sidebar.css";
import { connect } from "react-redux";
import { FILTER_MOVIES, TOGGLED_SIDE } from "../../actions/action";
import { useState } from "react";
import { useEffect } from "react";
import { AdvancedSearch, fetchDatas } from "../../api/moviesAPI";

function Sidebar({ sideToggled, dispatch }) {
  const navigate = useNavigate();
  const [pathName, setPathname] = useState(window.location.pathname);
  const toggleSidebar = () => dispatch({ type: TOGGLED_SIDE });

  const navigateUser = (path) => {
    dispatch({ type: TOGGLED_SIDE });
    if (path == "/most-popular") {
      fetchDatas("MostPopularMovies").then((response) => {
        dispatch({ type: FILTER_MOVIES, payload: response.items });
      });
    } else if (path == "/coming-soon") {
      fetchDatas("ComingSoon").then((response) => {
        dispatch({ type: FILTER_MOVIES, payload: response.items });
      });
    }
    navigate(path);
  };

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div className={`${sideToggled ? "toggled" : ""} sidebar`}>
      <h2>
        Movie <br />
        <span>App</span>
      </h2>
      {sidebarData.map(({ path, name, logo }, i) => {
        return (
          <div
            key={i}
            style={{ color: pathName == path ? "#fff" : "#5d838f" }}
            className="link"
            onClick={() => navigateUser(path)}
          >
            {logo}
            <p>{name}</p>
          </div>
        );
      })}
      <div className="close-side" onClick={() => toggleSidebar()}>
        <FaBars />
      </div>
    </div>
  );
}

export default connect((state) => state)(Sidebar);
