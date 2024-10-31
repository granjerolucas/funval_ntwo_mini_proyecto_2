import axios from "axios";

export const getOneCall = (lat, lon, exclude, units) => {
  return axios.get("/api/weather/onecall").then((response) => {
  console.log('weatherFilter response',response)

    return response.data;
  });
};
