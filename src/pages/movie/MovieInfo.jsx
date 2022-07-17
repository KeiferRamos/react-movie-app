import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getReviews, getSingleData } from "../../api/moviesAPI";
import { FaPlay } from "react-icons/fa";
import "./movieinfo.css";
import Reviews from "../../components/reviews/reviews";
import { connect } from "react-redux";
import Bookmark from "../../components/bookmark/bookmark";
import ArrowUp from "../../components/arrow-up/arrow.up";

function MovieInfo({ watchlists }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movieRef = useRef(null);
  const [info, setInfo] = useState({});
  const [reviews, setReviews] = useState([]);
  const { genres, plot, image, title, year, actorList, similars } = info;

  useEffect(() => {
    if (id && window.location.pathname.includes("movie-info")) {
      getSingleData(id).then((response) => {
        setInfo(response);
      });
      getReviews(id).then((response) => {
        setReviews(response.items);
      });
    }
  }, [window.location.pathname]);

  const getSimilar = (id) => {
    navigate(`/movie-info/${id}`);
    window.scroll(0, 0);
    movieRef.current.scroll(0, 0);
  };

  return (
    <div className="movie-info">
      <img src={image} alt="" />
      <div className="main-info" ref={movieRef}>
        <div className="title">
          <h1>{title}</h1>
          {watchlists && <Bookmark id={id} />}
          <span className="year">{year}</span>
        </div>
        <div className="genres">
          {genres?.split(",").map((genre, i) => (
            <p key={i}>{genre}</p>
          ))}
        </div>
        <div className="trailer-btn">
          <div>
            <FaPlay />
          </div>
          <p>watch trailer</p>
        </div>
        <div className="plot">
          <h3>PLOT</h3>
          <p>{plot}</p>
        </div>
        {reviews?.length > 0 && (
          <div className="reviews">
            <header>
              <h1>REVIEWS</h1>
              <button onClick={() => navigate(`/${id}/reviews`)}>
                All Reviews
              </button>
            </header>
            {reviews?.slice(0, 2).map((content, i) => {
              return <Reviews key={i} {...content} />;
            })}
          </div>
        )}
        <div className="casts">
          {actorList?.map(({ image, name, asCharacter }, i) => {
            return (
              <div key={i}>
                <img src={image} alt="" />
                <div>
                  <p>{name}</p>
                  <p>{asCharacter}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="related">
          <header>
            <h1>related movies</h1>
          </header>
          <div className="similar-movies">
            {similars?.map(({ title, image, id }, i) => {
              return (
                <div key={i} onClick={() => getSimilar(id)}>
                  <img src={image} alt="" />
                  <p>{title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ArrowUp />
    </div>
  );
}

export default connect((state) => state)(MovieInfo);
