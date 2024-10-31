"use client";
import React from "react";
import Skeleton from "./Skeleton";
import { getCompassDirection } from "@/src/utils/weather.utils";

const CardHightLights = ({ data, item }) => {
  let showTitle = null;
  if (data !== undefined) {
    switch (item.type) {
      case "wind":
        showTitle = (
          <>
            {data.current.wind_speed} <span className="font-normal">mph</span>
          </>
        );
        break;
      case "humidity":
        showTitle = (
          <>
            {data.current.humidity} <span className="font-normal">%</span>
          </>
        );
        break;
      case "visibility":
        showTitle = (
          <>
            {(data.current.visibility * 0.000621371).toFixed(2)}{" "}
            <span className="font-normal">miles</span>
          </>
        );
        break;
      case "pressure":
        showTitle = (
          <>
            {data.current.pressure} <span className="font-normal">mb</span>
          </>
        );
        break;

      default:
        break;
    }
  }
  return (
    <div className=" p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-700 dark:border-gray-700 mb-4 h-[20rem] flex flex-col gap-4 justify-center relative">
      {data == undefined && <Skeleton className="h-full" />}

      {data && (
        <>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            {item.title}
          </h5>

          <p className="mb-3 text-5xl font-bold text-gray-200 dark:text-gray-200 text-center">
            {showTitle}
          </p>
          {item.type === "wind" && (
            <div className="text-center flex justify-center items-center gap-x-4 text-white text-5xl">
              <span
                className={`wi wi-wind rotate-[${data.current.wind_deg}deg] `}
              ></span>
              <span className="text-xl">
                {getCompassDirection(data.current.wind_deg).description}
              </span>
            </div>
          )}
          {item.type === "humidity" && (
            <div className=" flex flex-col justify-center items-center text-white text-base">
              <div className="flex justify-between w-full">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <div className="w-full h-2 bg-yellow-500 rounded-full relative">
                <div
                  className={`bg-white h-full rounded-full`}
                  style={{
                    width: `${data.current.humidity}%`,
                  }}
                ></div>
              </div>
              <div className="text-right w-full">
                <span className="self-right ">%</span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CardHightLights;
