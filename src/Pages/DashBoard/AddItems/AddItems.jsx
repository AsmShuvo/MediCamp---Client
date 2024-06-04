import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddCamp = () => {
  const axiosPublic = useAxiosPublic();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.campName.value;
    const image = form.image.value;
    const fees_ = form.campFees.value;
    const fees = "$" + fees_.toString();
    const healthcare_professional = form.healthcareProfessionalName.value;
    const participant_count = 0;
    const description = form.description.value;
    const location = form.location.value;
    const date_time = form.dateTime.value;
    const newItem = {
      name,
      fees,
      location,
      date_time,
      healthcare_professional,
      participant_count,
      description,
      image,
    };
    console.log(newItem);
    axiosPublic
      .post("/camps", newItem)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire("Camp added successfully");
          form.reset();
        }
      })
      .catch((err) => {
        console.log("Error while adding item", err.message);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-6 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-semibold mb-4 text-gray-700">Add New Camp</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Camp Name
          </label>
          <input
            type="text"
            name="campName"
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
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
        >
          Add Camp
        </button>
      </form>
    </div>
  );
};

export default AddCamp;
