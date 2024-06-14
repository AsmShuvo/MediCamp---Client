import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-xl md:text-2xl lg:text-7xl mt-20 flex justify-center items-center border rounded-lg p-10 m-4 border-gray-600">
        <p className="text-secondary">Hi, Welcome</p>
        <p className="text-primary">
          {user?.displayName ? user?.displayName : "Back"}
        </p>
      </h2>
    </div>
  );
};

export default UserHome;
