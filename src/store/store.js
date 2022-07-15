import { createStore } from "redux";
import reducer from "../reducer/reducer";

const initialStore = {
  error: {
    type: "",
    text: "",
  },
  filteredMovies: [],
  isLoading: false,
  sideToggled: false,
  usp: { genres: [], title_groups: [], companies: [], sound_mix: [] },
};

export default createStore(reducer, initialStore);
