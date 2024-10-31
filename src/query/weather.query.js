import { useQuery } from "@tanstack/react-query";
import { getOneCall } from "../api/weather.api";

const KEY_QUERY_WEATHER_FILTER = "weather-filter";
export const useWeatherFilter = (
  lat = "",
  lon = "",
  exclude = "minutely,hourly,alerts",
  units = "imperial"
) => {
  return useQuery({
    queryKey: [KEY_QUERY_WEATHER_FILTER, lat, lon, exclude, units],
    queryFn: () => {
      console.log('weatherFilter','ger request')

      return getOneCall(lat, lon, exclude, units);
    },
  });
};
