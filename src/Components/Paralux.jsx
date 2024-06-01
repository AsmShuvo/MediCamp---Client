import React from "react";

const Paralux = ({ image, title, desc }) => {
  console.log("called");
  return (
    <div
      className="h-[400px] w-5/6 mx-auto flex justify-center items-center text-center bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-white w-2/3 h-1/2 rounded-md p-4">
        <h1 className="text-4xl font-bold mb-2 font-serif">{title}</h1>
        <p className="font-mono">{desc}</p>
      </div>
    </div>
  );
};

export default Paralux;
