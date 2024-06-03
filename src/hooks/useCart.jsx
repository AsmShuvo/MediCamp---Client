import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
  const axiosSecure = useAxiosSecure();
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
  console.log("All participants:", carts);
  return [carts, refetch, isLoading, error]; 
};

export default useCarts;
