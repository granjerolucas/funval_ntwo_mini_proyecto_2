import React from "react";
import CardCurrentTime from "./CardCurrentTime";
import CardFutureTime from "./CardFutureTime";
import CardHightLights from "./CardHightLights";
import { useWeatherFilter } from "@/src/query/weather.query";
import FilterLocation from "./FilterLocation";

const HomePage = () => {
  const { data: weatherFilter } = useWeatherFilter();
  console.log("weatherFilter", weatherFilter);

  let daily = [null, null, null, null, null, null];
  if (weatherFilter) {
    daily = weatherFilter.daily.slice(0, 5);
    console.log("weatherFilter daily", daily);
  }

  return (
    <div className="container mx-auto bg-slate-500 py-10 px-4 flex flex-col gap-8">
      <h1 className="text-3xl text-center font-bold">Weather App</h1>
      <FilterLocation />
      <div className="grid grid-cols-1 md:grid-cols-[4fr,6fr] gap-4 items-start">
        <CardCurrentTime data={weatherFilter} />
        {/* <div className="flex flex-wrap gap-3 justify-center"> */}
        <div className="">
          <div className="text-right my-4">
            <button
              type="button"
              class="text-white text-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              °C
            </button>
            <button
              type="button"
              class="text-white text-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              °F
            </button>
          </div>
          <div className="columns-5 justify-center">
            {daily.map((item, index) => (
              <CardFutureTime data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold">{`Today's Highlights`}</h2>
      <div className="columns-2 ">
        {[1, 2, 3, 4].map((item, index) => (
          <CardHightLights key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
