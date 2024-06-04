import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { AuthContext } from "./../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const CampDetails = () => {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  console.log(serverUrl);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleShowForm = () => {
    setShowForm((prevShowForm) => {
      if (!prevShowForm && formRef.current) {
        setTimeout(() => {
          formRef.current.scrollIntoView({ behavior: "smooth" });
          formRef.current.querySelector("input, select").focus();
        }, 0);
      }
      return !prevShowForm;
    });
  };

  const { data: campDetail, isLoading } = useQuery({
    queryKey: ["campDetail", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/camp/${id}`);
      return res.data;
    },
  });

  const [participant, setParticipant] = useState([]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!campDetail) {
    return <div>No camp details found</div>;
  }

  const { user } = useContext(AuthContext);
  const {
    name,
    fees,
    date_time,
    location,
    healthcare_professional,
    participant_count,
    description,
    image,
  } = campDetail;

  const dateTime = new Date(date_time);
  const dateString = dateTime.toDateString();
  const timeString = dateTime.toLocaleTimeString();

  const handleJoin = (e) => {
    e.preventDefault();
    const form = e.target;
    const age = form.age.value;
    const gender = form.gender.value;
    const phone = form.phone.value;
    const em_phone = form.em_phone.value;
    const campFee = parseInt(fees.replace("$", ""), 10);
    const newParticipant = {
      participant_name: user?.displayName,
      participant_email: user?.email,
      campFee,
      camp_name: name,
      age,
      gender,
      phone,
      em_phone,
    };
    console.log("New Participant:", newParticipant);

    const updatedCamp = {
      name,
      image,
      fees,
      date_time,
      location,
      healthcare_professional,
      participant_count: participant_count + 1,
      description,
    };
    const nevigate = useNavigate();
    axios.post(`${serverUrl}/participants`, newParticipant).then((data) => {
      if (data.data.insertedId) {
        Swal.fire("Application successful");
        form.reset();
        nevigate("/camps");
      }
    });

    axios.put(`${serverUrl}/participants/${id}`, updatedCamp).then((data) => {
      if (data.data.modifiedCount) {
        console.log("Camp Updated...!");
      }
    });
  };

  return (
    <div className="pt-28 bg-gray-300">
      <form
        ref={formRef}
        onSubmit={handleJoin}
        className={`max-w-md bg-white p-8 rounded-xl mb-10 mx-auto ${
          showForm ? "" : "hidden"
        }`}
      >
        {/* form inputs */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="campName"
            id="floating_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            defaultValue={name}
            disabled
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Camp Name
          </label>
        </div>
        {/* Additional form inputs */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="age"
              id="floating_age"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_age"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Age
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <select
              name="gender"
              id="floating_gender"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            >
              <option value="" disabled selected hidden>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        {/* Additional form inputs */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="em_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Emergency Contact
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <div className="max-w-5xl mx-auto py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* <img src={image} alt={name} className="w-full h-auto mb-6" /> */}
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-gray-600 mb-4">
            <strong>Date:</strong> {dateString} <br />
            <strong>Time:</strong> {timeString}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Location:</strong> {location}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Fees:</strong> ${fees}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Healthcare Professional:</strong> {healthcare_professional}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Participants:</strong> {participant_count}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Description:</strong> {description}
          </p>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleShowForm}
          >
            Join camp now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
