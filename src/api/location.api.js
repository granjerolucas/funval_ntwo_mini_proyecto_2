import axios from "axios";

export const getLocationByDefault = () => {
  return axios
    .get("https://ipinfo.io/45.5.59.65?token=266b9f0a1b521d")
    .then((response) => {
      
      return response.data;
    });
};

export const findLocation = (query) => {
  return axios
    .get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=3bc4c9f45cf04e7a74ac17d51146bf82`
    )
    .then((response) => {
      return response.data;
    });
};