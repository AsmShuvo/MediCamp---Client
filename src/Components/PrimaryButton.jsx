import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ route, text }) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Link
        to={`/${route}`}
        className="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-main focus:outline-none focus:ring active:bg-primary"
      >
        <span className="absolute -start-full transition-all group-hover:start-4">
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>

        <span className="text-lg capitalize text-white font-medium transition-all group-hover:ms-4">
          {text}
        </span>
      </Link>
    </div>
  );
};

export default PrimaryButton;
