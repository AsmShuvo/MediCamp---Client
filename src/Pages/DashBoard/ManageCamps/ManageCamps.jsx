import React from "react";
import useCamps from "../../../hooks/useCamps";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageCamps = () => {
  const [camps, refetch] = useCamps();
  const axiosSecure = useAxiosSecure();
  //console.log("In managecamps", camps);
  const handleDeleteCamp = (id) => {
    //console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/camps/${id}`).then((data) => {
          if (data.data.deletedCount) {
            refetch();
            Swal.fire("Camp deleted successfully");
          }
        });
      }
    });
  };
  return (
    <div className="m-10 ">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Camp name
              </th>
              <th scope="col" className="px-6 py-3">
                Date & Time
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Healthcare Professional
              </th>
              <th
                scope="col"
                className="px-6 border border-red-600 text-center py-3"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {camps?.map((camp) => {
              const dateTime = new Date(camp.date_time);
              const dateString = dateTime.toDateString();
              const timeString = dateTime.toLocaleTimeString();
              //console.log(camp);

              return (
                <tr
                  key={camp.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {camp.name}
                  </th>
                  <td className="px-6 py-4">
                    {dateString} {timeString}
                  </td>
                  <td className="px-6 py-4">{camp.location}</td>
                  <td className="px-6 py-4">{camp.healthcare_professional}</td>
                  <td className="px-6 py-4">
                    <div>
                      <Link to={`/dashboard/campUpdate/${camp._id}`}>
                        <button className="btn btn-link">Edit</button>
                      </Link>
                      <button
                        onClick={() => handleDeleteCamp(camp._id)}
                        className="btn btn-link"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCamps;
