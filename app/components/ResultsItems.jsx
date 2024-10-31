import React from "react";

const ResultsItems = ({ data, onClick }) => {
  return (
    <li onClick={onClick}>
      <button
        type="button"
        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {data.name}, {data.state} - {data.country}
      </button>
    </li>
  );
};

export default ResultsItems;
