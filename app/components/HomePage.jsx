"use client";
import React, { useEffect, useState } from "react";
import CardCurrentTime from "./CardCurrentTime";
import CardFutureTime from "./CardFutureTime";
import CardHightLights from "./CardHightLights";
import { useWeatherFilter } from "@/src/query/weather.query";
import FilterLocation from "./FilterLocation";
import dayjs from "dayjs";
import { getLocationByDefault } from "@/src/api/location.api";

const HomePage = () => {
  const [search, setSearch] = useState({
    lat: "",
    lon: "",
    exclude: "minutely,hourly,alerts",
    units: "imperial",
    city: "",
  });
  const [convertion, setConvertion] = useState("fahrenheit");
  const { data: weatherFilter } = useWeatherFilter(
    search.lat,
    search.lon,
    search.exclude,
    search.units,
    convertion
  );

  let daily = [null, null, null, null, null];
  if (weatherFilter) {
    daily = weatherFilter.daily.slice(0, 5);
  }

  const handleSelected = (item) => {
    setSearch((prev) => {
      return {
        ...prev,
        lat: item.lat,
        lon: item.lon,
        city: item.name,
      };
    });
  };
  const handleConvert = (e) => {
    e.preventDefault();
    setConvertion(e.currentTarget.value);
  };
  useEffect(() => {
    getLocationByDefault().then((res) => {
      const [lat, lon] = res.loc.split(",");

      setSearch({
        lat,
        lon,
        exclude: "minutely,hourly,alerts",
        units: "imperial",
        city: res.city,
      });
    });
  }, []);
  return (
    <div className="container mx-auto  py-10 px-4 flex flex-col gap-8x">
      <h1 className="text-4xl text-white text-center font-bold">Weather App</h1>
      <FilterLocation onSelected={handleSelected} />
      <div className="grid grid-cols-1 md:grid-cols-[4fr,7fr] gap-4 items-start">
        <CardCurrentTime data={weatherFilter} city={search.city} />
        {/* <div className="flex flex-wrap gap-3 justify-center"> */}
        <div className="">
          <div className="text-right my-4">
            <button
              type="button"
              className="text-white px-3 text-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group"
              value={"celsius"}
              onClick={handleConvert}
            >
              <span className="group-hover:hidden">°C</span>
              <span className="overflow-hidden w-0 transition-all duration-300 ease-in-out group-hover:block group-hover:w-[8rem]">
                Celsius
              </span>
            </button>
            <button
              type="button"
              className="text-white px-3 text-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group"
              value={"fahrenheit"}
              onClick={handleConvert}
            >
              <span className="group-hover:hidden">°F</span>
              <span className="overflow-hidden w-0 transition-all duration-300 ease-in-out group-hover:block group-hover:w-[8rem]">
                Fahrenheit
              </span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 md:block  md:columns-5 justify-center"> 
            {daily.map((item, index) => (
              <CardFutureTime
                data={item}
                key={index}
                day={dayjs().add(index + 1, "d")}
              />
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-white my-10">{`Today's Highlights`}</h2>
      <div className="grid grid-cols-2 gap-4 md:block md:columns-4 ">
        {[
          {
            type: "wind",
            title: "Wind status",
          },
          {
            type: "humidity",
            title: "Humidity",
          },
          {
            type: "visibility",
            title: "Visibility",
          },
          {
            type: "pressure",
            title: "Air Pressure",
          },
        ].map((item, index) => (
          <CardHightLights key={index} item={item} data={weatherFilter} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
