import React from "react";
import Skeleton from "./Skeleton";
import Image from "next/image";

const CardCurrentTime = ({ data }) => {
  const espaciado = 30; // Espacio en píxeles

  // Configura las imágenes de fondo con espacio
  const backgroundImages = [
    "/assets/img/weather/04d.png",
    "/assets/img/weather/04d.png",
  ]
    .map(
      (url, index) =>
        `url('${url}') ${index * espaciado}px ${index * espaciado}px`
    )
    .join(", ");

  // background-image: url(/assets/img/weather/04d.png), url(/assets/img/weather/04d.png), url(/assets/img/weather/04d.png);
  // background-position: top right, top left, center;
  // background-size: 100px, 100px;
  // background-repeat: no-repeat;
  // background-blend-mode: overlay;
  let icon = 'default'
  if (data) {
    icon = data.current.weather[0].icon
  }
  return (
    <div
      class={`blockx w-full p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700  h-[26rem] flex flex-col gap-4 justify-center relative bg-[url('/assets/img/weather/${icon}.png'),url('/assets/img/weather/${icon}.png'),url('/assets/img/weather/${icon}.png'),url('/assets/img/weather/${icon}.png')] bg-[size:8rem] bg-[position:top_right_2rem,top_left,bottom_2rem_right_2rem,bottom_2rem_left]  bg-no-repeat`}
      style={{ backgroundBlendMode: "overlay" }}
    >
      {data == undefined && <Skeleton />}
      {data && (
        <>
          <h5 class=" text-[4rem] font-bold tracking-tight text-gray-900 dark:text-white text-center">
            19.3°C
          </h5>
          <Image
            src={`/assets/img/weather/${data.current.weather[0].icon}.png`}
            alt="icon"
            className="self-center"
            width={100}
            height={100}
          />
          <div class="flex flex-col gap-y-2 text-center">
            <p class="text-2xl font-semibold text-gray-700 dark:text-gray-400">
              Broken Clouds
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Today Wed 30 oct
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">Lima</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardCurrentTime;
