import { FaBookmark, FaHome, FaRegCompass, FaFire, FaQq } from "react-icons/fa";

export default [
  { path: "/", name: "Home", logo: <FaHome /> },
  { path: "/watch-list", name: "Watchlist", logo: <FaBookmark /> },
  { path: "/search", name: "Explore", logo: <FaRegCompass /> },
  { path: "/most-popular", name: "Popular", logo: <FaFire /> },
  { path: "/coming-soon", name: "Soon", logo: <FaQq /> },
];
