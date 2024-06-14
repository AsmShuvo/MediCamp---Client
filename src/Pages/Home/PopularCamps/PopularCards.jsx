import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import {
  FaCircleDot,
  FaLocationArrow,
  FaPeopleLine,
  FaUserDoctor,
} from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

const PopularCards = ({ camp }) => {
  const {
    name,
    image,
    description,
    healthcare_professional,
    participant_count,
    location,
    date_time,
    fees,
  } = camp;
  return (
    <div className="">
      <div>
        <div className="hero rounded-xl hover:scale-105 hover:text-secondary  hover:shadow-xl transition-transform duration-500 transform ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={image}
              className="w-60 md:max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-3xl font-bold font-serif ">{name}</h1>
              <p className="py-4 font-mono">{description}</p>
              <div className="border w-fit bg-white rounded-lg p-4">
                <div className="flex">
                  <div className="font-semibold flex items-center gap-2 md:mr-2">
                    <FaUserDoctor /> {healthcare_professional}{" "}
                    <FaCircleDot className="text-green-600" />
                  </div>
                  <div className=" "> {location}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-lg flex gap-2 items-center">
                    <FaLocationArrow /> {location}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {" "}
                    <IoIosPeople /> {participant_count}
                  </div>
                  <div className="text-lg font-semibold text-blue-700">
                    {fees}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default PopularCards;
