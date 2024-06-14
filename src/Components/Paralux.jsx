import React from "react";

const Paralux = ({ image, title, desc }) => {
  //console.log("called");
  return (
    <div
      className="md:h-[400px] md:w-5/6 mx-auto flex rounded-md justify-center items-center text-center bg-cover bg-fixed bg-center mt-16"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-[#c29e9ea3] md:w-2/3 md:h-1/2 rounded-md p-4">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold mb-2 font-serif">{title}</h1>
        <p className="font-mono">{desc}</p>
      </div>
    </div>
  );
};

export default Paralux;
