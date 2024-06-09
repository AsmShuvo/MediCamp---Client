import React, { useContext, useState } from "react";
import { AuthContext } from "./../../../Providers/AuthProvider";
import { FaEnvelope } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [update, setUpdate] = useState(false);
  //console.log(user?.photoURL);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const updateName = form.name.value;
    const updatePhoto = form.photo.value;
    updateProfile(user, {
      displayName: updateName,
      photoURL: updatePhoto,
    })
      .then(() => {
        Swal.fire("Profile Updated successfully");
        setUpdate(!update);
      })
      .catch((err) => {
        //console.log("Error updated profile:", err.message);
      });
  };
  return (
    <div>
      <div className="h-screen dark:bg-gray-700 bg-gray-200 pt-12">
        {/* <!-- Card start --> */}
        <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <div className="px-4 pb-6">
            <div className="text-center my-4">
              <img
                className="h-32 w-32 rounded-full border-4 border-gray-800 mx-auto my-4"
                src={user?.photoURL}
                alt=""
              />
              <div className="py-2">
                <h3 className="font-bold flex flex-col items-center justify-center text-2xl text-white mb-1">
                  <MdOutlineAdminPanelSettings className="text-secondary text-5xl" />
                  {user?.displayName}
                </h3>
                <div className="inline-flex gap-1 text-gray-500  items-center">
                  {user?.email}
                </div>
              </div>
            </div>
            <div className="flex gap-2 px-2">
              <button
                disabled
                className="flex-1 flex justify-center items-center gap-2 rounded-full border-2 border-primary font-semibold  dark:text-white px-4 py-2"
              >
                Update Profile <IoIosArrowDown className="text-xl" />
              </button>
            </div>
          </div>
          <form
            onSubmit={handleUpdateProfile}
            className="px-4 py-4 flex flex-col gap-2"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={user?.displayName}
              className="input border-2 border-secondary input-md w-full bg-gray-900  rounded-full"
            />
            <input
              type="text"
              placeholder="Photo URL"
              defaultValue={user?.photoURL}
              name="photo"
              className="input border-2 border-secondary input-md w-full bg-gray-900  rounded-full"
            />
            <button
              type="submit"
              className="flex-1 w-full rounded-full bg-secondary text-white antialiased font-bold hover:bg-primary px-4 py-2"
            >
              Submit
            </button>
          </form>
        </div>
        {/* <!-- Card end --> */}
      </div>
    </div>
  );
};

export default AdminProfile;
