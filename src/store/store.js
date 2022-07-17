import { createStore } from "redux";
import reducer from "../reducer/reducer";

let data = localStorage.getItem("watchlist");

const initialStore = {
  watchlists: data ? JSON.parse(data) : [],
  filteredMovies: [],
  sideToggled: false,
  usp: { genres: [], title_groups: [], companies: [], sound_mix: [] },
};

export default createStore(reducer, initialStore);
