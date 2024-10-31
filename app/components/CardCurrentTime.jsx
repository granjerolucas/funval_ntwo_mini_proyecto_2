import React from "react";
import Skeleton from "./Skeleton";
import Image from "next/image";
import dayjs from "dayjs";

const CardCurrentTime = ({ data, city }) => {
  let icon = "default";
  let bg,
    bimage = "";
  if (data) {
    icon = data.current.weather[0].icon;
    bg = ` bg-[size:8rem] bg-[position:top_right_2rem,top_left,bottom_2rem_right_2rem,bottom_2rem_left]  bg-no-repeat`;
    bimage = `url('/assets/img/weather/${icon}.png'),url('/assets/img/weather/${icon}.png'),url('/assets/img/weather/${icon}.png'),url('/assets/img/weather/${icon}.png')`;
  }
  return (
    <div
      class={`blockx w-full p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-slate-700 dark:border-gray-700  h-[26rem] flex flex-col gap-4 justify-center relative ${bg}`}
      style={{ backgroundBlendMode: "overlay", backgroundImage: bimage }}
    >
      {data == undefined && <Skeleton />}
      {data && (
        <>
          <h5 className=" text-[4rem] font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {data.current.temp}°C
          </h5>
          <Image
            src={`/assets/img/weather/${data.current.weather[0].icon}.png`}
            alt="icon"
            className="self-center"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-y-2 text-center">
            <p className="text-2xl font-semibold text-gray-700 dark:text-gray-400 capitalize">
              {data.current.weather[0].description}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-200">
              Today {dayjs().format("ddd DD MMM")}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-200">{city}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardCurrentTime;
