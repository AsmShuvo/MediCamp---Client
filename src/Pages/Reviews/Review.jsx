import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ name, email, text, rating }) => {
  return (
    <div className="mx-auto">
      <div>
        <div className="card w-96 border">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl text-gray-500 uppercase font-serif">
              {name}
            </h2>
            <div className="flex justify-center">
              {Array.from({ length: rating }, (_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <p className="font-mono text-blue-950">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
