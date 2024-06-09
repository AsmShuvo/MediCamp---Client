import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";

const useCarts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const {
    data: carts,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/participants");
      return res.data;
    },
  });
  return [carts, refetch, isLoading, error];
};

export default useCarts;
