import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";
import React from "react";
import Skeleton from "./Skeleton";
/**
 *
 * @param {Object} props
 * @param {Object} props.data
 * @param {Dayjs} props.day
 * @returns
 */
const CardFutureTime = ({ data, day = dayjs() }) => {

  return (
    <div className="mb-4 bg-white border  border-gray-200 rounded-lg shadow dark:bg-slate-700 dark:border-gray-700 h-[18rem]">
      <div className="p-5 flex flex-col gap-y-3 justify-center h-full">
        {data == null && <Skeleton className="h-full" />}
        {data && (
          <>
            <h5 className="mb-2 text-[1.3rem] font-semibold tracking-tight text-gray-900 dark:text-white text-center">
              {+day.get("day") === +dayjs().get("day") + 1
                ? "Tomorrow"
                : day.format("ddd, DD MMM")}
            </h5>
            <div className="h-24 text-center self-center">
              <Image
                src={`/assets/img/weather/${data.weather[0].icon}.png`}
                alt="icon"
                className="self-center"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col  gap-y-0 text-center justify-between w-full">
              <span className="text-2xl text-center text-white">
                {Math.round(data.temp.max)}°C
              </span>
              <span className="text-2xl text-center text-gray-500">
                {Math.round(data.temp.min)}°C
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardFutureTime;
