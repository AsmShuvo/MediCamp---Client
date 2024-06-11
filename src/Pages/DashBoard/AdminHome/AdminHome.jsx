import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const AdminHome = () => {
  useEffect(() => {
    document.title = "Medicamp | Admin Home";
  }, []);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-3xl">
        <span>Welcome </span>
        {user?.displayName ? user?.displayName : "Back"}
      </h2>
    </div>
  );
};

export default AdminHome;
