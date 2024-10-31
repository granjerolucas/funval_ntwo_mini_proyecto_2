import { useQuery } from "@tanstack/react-query";
import { getOneCall } from "../api/weather.api";
import getQueryCient from ".";
import { convertTo } from "../utils/weather.utils";

const KEY_QUERY_WEATHER_FILTER = "weather-filter";

const convertValues = (_data, convertion) => {
  return {
    ..._data,
    current: {
      ..._data.current,
      temp: convertTo(convertion, _data.current.temp),
      feels_like: convertTo(convertion, _data.current.feels_like),
    },
    daily: _data.daily.map((item) => {
      return {
        ...item,
        temp: {
          day: convertTo(convertion, item.temp.day),
          min: convertTo(convertion, item.temp.min),
          max: convertTo(convertion, item.temp.max),
          night: convertTo(convertion, item.temp.night),
          eve: convertTo(convertion, item.temp.eve),
          morn: convertTo(convertion, item.temp.morn),
        },
        feels_like: {
          day: convertTo(convertion, item.feels_like.day),
          night: convertTo(convertion, item.feels_like.night),
          eve: convertTo(convertion, item.feels_like.eve),
          morn: convertTo(convertion, item.feels_like.morn),
        },

        weather: item.weather.map((weather) => {
          return {
            ...weather,
            description: convertTo(convertion, weather.description),
          };
        }),
      };
    }),
  };
};

export const useWeatherFilter = (
  lat = "",
  lon = "",
  exclude = "minutely,hourly,alerts",
  units = "imperial",
  convertion = "fahrenheit"
) => {
  return useQuery({
    queryKey: [KEY_QUERY_WEATHER_FILTER, lat, lon, exclude, units, convertion],
    queryFn: async () => {
      // if (_data) {
      //   return _data;
      // }
      if (convertion === "fahrenheit") {
        const data = await getOneCall(lat, lon, exclude, units);

        return data;
      } else {
        const _data = getQueryCient().getQueryData([
          KEY_QUERY_WEATHER_FILTER,
          lat,
          lon,
          exclude,
          units,
          "fahrenheit",
        ]);

        if (_data !== undefined && _data !== null) {
          let _convert;
          try {
            _convert = convertValues(_data, convertion);

          } catch (error) {
          }

          return _convert;
        } else {
          const __data = await getOneCall(lat, lon, exclude, units);
          getQueryCient().setQueryData(
            [KEY_QUERY_WEATHER_FILTER, lat, lon, exclude, units, "fahrenheit"],
            __data
          );
          return convertValues(__data, convertion);
        }
      }
    },
    refetchOnWindowFocus: false,
  });
};
