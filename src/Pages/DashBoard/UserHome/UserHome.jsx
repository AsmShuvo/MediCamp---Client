import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-3xl">
        <span>
          Hi, Welcome {user?.displayName ? user?.displayName : "Back"}
        </span>
      </h2>
    </div>
  );
};

export default UserHome;
