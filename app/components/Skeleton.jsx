import React from "react";

const Skeleton = ({ className }) => {
  return (
    <div
      role="status"
      className={`flex items-center justify-center h-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 ${className}`}
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
