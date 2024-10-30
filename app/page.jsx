import Image from "next/image";
import CardCurrentTime from "./components/CardCurrentTime";
import CardFutureTime from "./components/CardFutureTime";
import CardHightLights from "./components/CardHightLights";

export default function Home() {
  return (
    <div className="container mx-auto bg-slate-500 py-10 px-4 flex flex-col gap-8">
      <h1 className="text-3xl text-center font-bold">Weather App</h1>

      <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 ">
        <CardCurrentTime />
        <div className="columns-3 gap-y-3">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <CardFutureTime key={index} />
          ))}
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
}
