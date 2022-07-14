import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../api/moviesAPI";
import Reviews from "../../components/reviews/reviews";
import "./reviews.css";

function AllReviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(id).then((response) => {
      setReviews(response.items);
    });
  }, []);

  return (
    <div className="all-reviews">
      <div className="reviews">
        {reviews.map((content, i) => {
          return <Reviews key={i} {...content} />;
        })}
      </div>
    </div>
  );
}

export default AllReviews;
