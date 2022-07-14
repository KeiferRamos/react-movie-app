import {
  FILTER_MOVIES,
  SET_ERROR,
  SET_LOADING,
  TOGGLED_SIDE,
} from "../actions/action";

export default function (state, { type, payload }) {
  if (type == SET_ERROR) {
    return { ...state, error: payload };
  }
  if (type == TOGGLED_SIDE) {
    let isToggled = state.sideToggled ? false : true;
    return { ...state, sideToggled: isToggled };
  }
  if (type == SET_LOADING) {
    return { ...state, isLoading: payload };
  }
  if (type == FILTER_MOVIES) {
    return { ...state, filteredMovies: payload };
  }
  return state;
}
