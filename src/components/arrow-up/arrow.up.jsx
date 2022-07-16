import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ArrowUp() {
  const [scrollHeight, setScrollHeight] = useState(window.pageYOffset);

  useEffect(() => {
    const updateScrollHeight = () => {
      setScrollHeight(window.pageYOffset);
    };
    window.addEventListener("scroll", updateScrollHeight);

    return () => window.removeEventListener("scroll", updateScrollHeight);
  }, [window.pageYOffset]);

  return (
    <div>
      {scrollHeight > 200 && (
        <FaArrowUp className="arrow-up" onClick={() => window.scroll(0, 0)} />
      )}
    </div>
  );
}

export default ArrowUp;
