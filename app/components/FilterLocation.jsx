"use client";
import React, { useEffect, useRef, useState } from "react";
import ResultsItems from "./ResultsItems";
import { findLocation } from "@/src/api/location.api";

const FilterLocation = ({onSelected}) => {
  const [locations, setLocations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const refSearch = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    findLocation(refSearch.current.value).then((res) => {
      setLocations(res);
      setShowModal(true);
    });
  };
  const handleSelectRsult = (item) => (e) => {
    e.preventDefault();
    onSelected(item);
    setShowModal(false);
    refSearch.current.value = `${item.name}, ${item.state} - ${item.country}`;
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.id !== "search") {
        setShowModal(false);
      }
    });
  }, []);
  return (
    <form
      className="max-w-lg w-full mx-auto my-10 relative"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            ref={refSearch}
            onFocus={() => {
              if (locations.length > 0) {
                setShowModal(true);
              }
            }}
            // onLostPointerCapture={() => setShowModal(false)}
            // onMouseLeave={() => setShowModal(false)}
            // onClick={() => setShowModal(true)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Input Location..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>
      {showModal && (
        <div
          id="dropdown"
          class="z-10 mt-4 transition-all ease-in-out bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-600 absolute"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            {locations.map((item, index) => (
              <ResultsItems
                key={index}
                data={item}
                onClick={handleSelectRsult(item)}
              />
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default FilterLocation;
