import React, { useState } from "react";

function Reviews({ username, date, content, title }) {
  const [readmore, setReadmore] = useState(false);
  return (
    <div>
      <h2 className="username">{username}</h2>
      <h3 className="reviews-title">{title}</h3>
      <p>
        {content.length < 200
          ? content
          : readmore
          ? content
          : `${content.slice(0, 200)}...`}
        <button className="showmore-btn" onClick={() => setReadmore(!readmore)}>
          {content.length < 200 ? "" : readmore ? "SHOW LESS" : "READ MORE"}
        </button>
      </p>
      <p className="review-date">{date}</p>
    </div>
  );
}

export default Reviews;
