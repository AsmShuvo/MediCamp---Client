import React from "react";
import { CiTimer } from "react-icons/ci";
import { FaLocationArrow, FaPeopleGroup, FaUserDoctor } from "react-icons/fa6";

const Camp = ({ camp }) => {
  const {
    name,
    _id,
    image,
    fees,
    date_time,
    location,
    description,
    participant_count,
    healthcare_professional,
  } = camp;
  const dateTime = new Date(date_time);
  const dateString = dateTime.toDateString();
  const timeString = dateTime.toLocaleTimeString();
  console.log(dateString);
  console.log(timeString);
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <div>
        <img class="rounded-t-lg p-4" src={image} alt="" />
      </div>
      <div class="p-5">
        <div>
          <h5 class="mb-2 text-2xl font-extrabold font-serif tracking-tight text-gray-700 ">
            {name}
          </h5>
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div>
          <p class="mb-3 text-blue-700 font-semibold flex items-center gap-2">
            {fees}
          </p>
        </div>
        <p class="mb-3 text-gray-700 font-semibold flex items-center gap-2">
          <CiTimer />
          {dateString} AT {timeString}
        </p>
        <div>
          <p class="mb-3 text-gray-500 font-semibold flex items-center gap-2">
            <FaLocationArrow /> {location}
          </p>
        </div>
        <div>
          <p class="mb-3 text-gray-500 font-semibold flex items-center gap-2">
            <FaUserDoctor /> Specialist: {healthcare_professional}
          </p>
        </div>
        <div>
          <p class="mb-3 text-gray-500 font-semibold flex items-center gap-2">
            <FaPeopleGroup />
            {participant_count}
          </p>
        </div>

        <div class="btn btn-link">
          Join Camp
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Camp;
