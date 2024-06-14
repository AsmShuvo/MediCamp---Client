import React from "react";

const SecTitle = ({ subHeading, heading }) => {
  return (
    <div className="my-10 w-3/4 md:w-1/4 mx-auto">
      <p className="text-yellow-600 text-center mb-2">---{subHeading}---</p>
      <h3 className="text-3xl font-bold uppercase text-gray-600 text-center border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SecTitle;
