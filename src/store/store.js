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
};

export default createStore(reducer, initialStore);
