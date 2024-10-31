"use client";
import Image from "next/image";

import { QueryClientProvider } from "@tanstack/react-query";
import getQueryCient from "@/src/query";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <QueryClientProvider client={getQueryCient()}>
      <HomePage />
    </QueryClientProvider>
  );
}
