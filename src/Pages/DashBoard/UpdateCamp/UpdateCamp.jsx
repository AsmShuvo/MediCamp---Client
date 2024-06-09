import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCamps from "../../../hooks/useCamps";

const UpdateCamp = () => {
  const { id } = useParams();
  //console.log(id);
  const axiosSecure = useAxiosSecure();
  const [camps] = useCamps();

  //console.log(camps);
  const prevCamp = camps?.find((camp) => camp._id == id);
  //console.log(prevCamp);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.campName.value;
    const image = form.image.value;
    const fees = form.campFees.value;
    const date_time = form.dateTime.value;
    const location = form.location.value;
    const healthcare_professional = form.healthcareProfessionalName.value;
    const description = form.description.value;

    const updatedCamp = {
      name,
      fees,
      date_time,
      location,
      healthcare_professional,
      image,
      description,
      participant_count: prevCamp.participant_count,
    };
    //console.log(updatedCamp);
    axiosSecure.put(`/camps/${id}`, updatedCamp).then((data) => {
      //console.log(data.data);
      if (data.data.modifiedCount) {
        Swal.fire("Camp updated successfully");
      }
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-6 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-semibold mb-4 text-gray-700">Update Camp</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Camp Name
          </label>
          <input
            type="text"
            name="campName"
            defaultValue={prevCamp?.name}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            defaultValue={prevCamp?.image}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Camp Fees
            </label>
            <input
              type="text"
              name="campFees"
              defaultValue={prevCamp?.fees}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date & Time
            </label>
            <input
              type="datetime-local"
              name="dateTime"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              defaultValue={prevCamp?.location}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Healthcare Professional Name
            </label>
            <input
              type="text"
              name="healthcareProfessionalName"
              defaultValue={prevCamp?.healthcare_professional}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={prevCamp?.description}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
        >
          Update Camp
        </button>
      </form>
    </div>
  );
};

export default UpdateCamp;
