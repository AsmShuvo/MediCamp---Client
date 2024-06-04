 import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/users`).then((response) => {
      const users = response.data;
      const curUser = users.find((u) => u.email === user?.email);
      setIsAdmin(curUser?.role === "admin");
      setLoading(false);
    });
  }, [axiosSecure, user]);

  return { isAdmin, loading };
};
