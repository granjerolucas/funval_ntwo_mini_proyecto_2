import Image from "next/image";
import React from "react";

const CardFutureTime = ({ data }) => {
  return (
    <div class="mb-4 bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5 flex flex-col gap-y-3 justify-center">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Tomorrow
        </h5>
        <Image
          src={"/assets/img/weather/04d.png"}
          alt="icon"
          className="self-center"
          width={100}
          height={100}
        />
        <div class="flex flex-col  gap-y-0 text-center justify-between w-full">
          <span className="text-2xl text-white">19.3°C</span>
          <span className="text-2xl text-gray-500">19.3°C</span>
        </div>
      </div>
    </div>
  );
};

export default CardFutureTime;
