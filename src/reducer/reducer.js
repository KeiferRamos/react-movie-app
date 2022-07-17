import {
  CLEAR_PARAMS,
  FILTER_MOVIES,
  REMOVE_PARAMS,
  SET_PARAMS,
  SET_WATCHLIST,
  TOGGLED_SIDE,
  REMOVE_WATCHLIST,
} from "../actions/action";

export default function (state, { type, payload }) {
  if (type == TOGGLED_SIDE) {
    let isToggled = state.sideToggled ? false : true;
    return { ...state, sideToggled: isToggled };
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
  if (type == SET_WATCHLIST) {
    return { ...state, watchlists: [...state.watchlists, payload] };
  }
  if (type == REMOVE_WATCHLIST) {
    return {
      ...state,
      watchlists: state.watchlists.filter((item) => item != payload),
    };
  }
  return state;
}
