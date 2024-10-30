import localFont from "next/font/local";
import "./globals.css";
import "./css/weather/css/weather-icons.min.css";
import "./css/weather/css/weather-icons-wind.min.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// const weatherFont = localFont({
//   src: "./font/weathericons-regular-webfont.woff2",
//   variable: "--font-weathericons",
//   weight: "100 900",
// });


export const metadata = {
  title: "Weather App",
  description: "Funval Mini Project 2",
  keywords: "Weather App, Funval, Next.js, Tailwind, TypeScript",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
