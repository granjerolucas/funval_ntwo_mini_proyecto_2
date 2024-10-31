import axios from "axios";

export const getOneCall = (lat, lon, exclude, units) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=3bc4c9f45cf04e7a74ac17d51146bf82&exclude=${exclude}&units=${units}`
    )
    .then((response) => {
      return response.data;
    });
};


export const getOneCallTest = (lat, lon, exclude, units) => {
  return axios.get("/api/weather/onecall").then((response) => {
    return response.data;
  });
};
