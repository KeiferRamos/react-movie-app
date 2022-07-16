import axios from "axios";

const BASE_URL = "https://imdb-api.com/en/API";
const api_key1 = "k_v02me0d7";
const api_key2 = "k_36kb43e6";
const api_key3 = "k_o8ics53n";
const api_key4 = "k_xlo6k01j";

const fetchDatas = async (category) => {
  const { data } = await axios.get(`${BASE_URL}/${category}/${api_key3}`);
  return data;
};

const getSingleData = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/Title/${api_key3}/${id}`);
  return data;
};

const getReviews = async (id) => {
  const { data: items } = await axios.get(
    `${BASE_URL}/Reviews/${api_key3}/${id}`
  );
  return items;
};

const autoCompleteSearch = async (input) => {
  const { data: results } = await axios.get(
    `${BASE_URL}/Search/${api_key3}/${input}`
  );
  return results;
};

const AdvancedSearch = async (genre) => {
  const { data: results } = await axios.get(
    `${BASE_URL}/AdvancedSearch/${api_key3}?genres=${genre}`
  );
  return results;
};

const FilterSearching = async (query) => {
  const { data } = await axios.get(
    `${BASE_URL}/AdvancedSearch/${api_key3}?${query}`
  );
  return data;
};

export {
  fetchDatas,
  getSingleData,
  getReviews,
  autoCompleteSearch,
  AdvancedSearch,
  FilterSearching,
};
