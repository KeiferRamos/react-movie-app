import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  MovieInfo,
  Watchlist,
  Home,
  AllReviews,
  Movie,
  Search,
} from "../pages/index";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie-info/:id" element={<MovieInfo />} />
      <Route path="/watch-list" element={<Watchlist />} />
      <Route path="/:id/reviews" element={<AllReviews />} />
      <Route path="/:genre" element={<Movie />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default RoutesPage;
