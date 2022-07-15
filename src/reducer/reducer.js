import {
  CLEAR_PARAMS,
  FILTER_MOVIES,
  REMOVE_PARAMS,
  SET_ERROR,
  SET_LOADING,
  SET_PARAMS,
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
  if (type == SET_PARAMS) {
    const { params, item } = payload;
    return {
      ...state,
      usp: { ...state.usp, [params]: [...state.usp[params], item] },
    };
  }
  if (type == REMOVE_PARAMS) {
    const { params, item } = payload;
    return {
      ...state,
      usp: {
        ...state.usp,
        [params]: state.usp[params].filter((el) => el != item),
      },
    };
  }
  if (type == CLEAR_PARAMS) {
    return {
      ...state,
      usp: { genres: [], title_groups: [], companies: [], sound_mix: [] },
    };
  }
  return state;
}
