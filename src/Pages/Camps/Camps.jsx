import React, { useEffect, useState } from "react";
import useCamps from "../../hooks/useCamps";
import Camp from "../Camp/Camp";
import MenuCover from "../../Components/Covers/MenuCover";
import { FaSearch, FaSort } from "react-icons/fa";

import campsCover from "../../../public/images/camps.png";
import { TbLayout } from "react-icons/tb";

const Camps = () => {
  useEffect(() => {
    document.title = "Medicamp | Available Camps";
  }, []);

  const [camps, isLoading, error, refetch] = useCamps();
  const [sortBy, setSortBy] = useState("participants");
  const [searchQuery, setSearchQuery] = useState("");

  const sortCamps = (camps, criterion) => {
    if (!camps) return [];
    const sortedList = [...camps];
    if (criterion === "participants") {
      sortedList.sort((a, b) => b.participant_count - a.participant_count);
    } else if (criterion === "fees") {
      sortedList.sort((a, b) => {
        const feeA = parseInt(a.fees.replace("$", ""));
        const feeB = parseInt(b.fees.replace("$", ""));
        return feeA - feeB;
      });
    }
    return sortedList;
  };

  const sortedCamps = sortCamps(camps, sortBy);

  const filteredCamps = sortedCamps.filter((camp) => {
    if (!camp) return false;
    const name = camp.name?.toLowerCase() ?? "";
    const healthcareProfessional =
      camp.healthcare_professional?.toLowerCase() ?? "";
    return (
      name.includes(searchQuery.toLowerCase()) ||
      healthcareProfessional.includes(searchQuery.toLowerCase())
    );
  });

  const [cols, setCols] = useState(3);
  const hanldeCols = () => {
    if (cols == 2) {
      setCols(3);
    }
    if (cols == 3) {
      setCols(2);
    }
    console.log(cols);
  };

  return (
    <div className="mx-2 md:mx-10">
      <MenuCover
        image={campsCover}
        title="Explore Our Exciting Health Camps"
        desc="Discover a variety of health camps tailored to your needs. Join us to improve your well-being with expert guidance and support."
      />
      {/* Search and sort menu */}
      <div className="flex  md:flex-row flex-col mt-6">
        <form
          className="flex flex-1 justify-center items-center max-w-lg mx-auto bg-white"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaSearch />
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-primary outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              placeholder="Search camps here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                />
              </svg>
            </button>
          </div>
          <button
            type="button"
            className="inline-flex  hover:bg-secondary items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none hover:border-none"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
        </form>
        <div className="w-1/3 flex flex-col lg:flex-row gap-2 items-center">
          <details className="dropdown">
            <summary className="m-1 btn ml-20 md:ml-0 w-40 btn-outline text-primary hover:bg-secondary hover:border-secondary">
              Sort Here <FaSort />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={() => setSortBy("participants")}>
                <span className="hover:bg-primary hover:text-white">
                  Most Registered
                </span>
              </li>
              <li onClick={() => setSortBy("fees")}>
                <span className="hover:bg-primary hover:text-white">Fees</span>
              </li>
            </ul>
          </details>
          <div className="inline-flex hidden md:block hover:bg-secondary h-12 items-center divide-x rounded dark:bg-violet-600 dark:text-gray-100 dark:divide-gray-300">
            <button
              onClick={hanldeCols}
              type="button"
              className="px-8 w-28 md:w-40 py-3 flex items-center gap-1"
            >
              <p className="flex gap-1 items-center ">
                {" "}
                <TbLayout /> Columns {cols}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`grid grid-cols-1   ${
          cols == 3 ? "md:grid-cols-3" : "md:grid-cols-2"
        } gap-4 my-10`}
      >
        {filteredCamps.map((camp) => (
          <Camp key={camp._id} camp={camp} />
        ))}
      </div>
    </div>
  );
};

export default Camps;
